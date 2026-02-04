import { useState, useEffect, useRef } from 'react'
import { useMapState } from '../../context/MapStateContext'
import { locationData } from '../../locations/locationData'
import './ClueOverlay.css'

const TypewriterText = ({ text, onComplete }: { text: string; onComplete: () => void }) => {
  const [charIndex, setCharIndex] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (charIndex >= text.length) {
      onCompleteRef.current()
      return
    }
    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1)
    }, 55)
    return () => clearTimeout(timeout)
  }, [charIndex, text.length])

  return (
    <>
      {text.slice(0, charIndex)}
      {charIndex < text.length && <span className="typewriter-cursor">|</span>}
    </>
  )
}

interface ClueCardProps {
  index: number
  content: string
  isFlipped: boolean
  isNext: boolean
  isTyping: boolean
  onFlip: () => void
  onTypingComplete: () => void
}

const ClueCard = ({ index, content, isFlipped, isNext, isTyping, onFlip, onTypingComplete }: ClueCardProps) => {
  const [showContent, setShowContent] = useState(false)

  // Delay content reveal until flip animation is mostly done
  useEffect(() => {
    if (isFlipped) {
      const timeout = setTimeout(() => setShowContent(true), 350)
      return () => clearTimeout(timeout)
    }
  }, [isFlipped])

  return (
    <div
      className={`clue-card ${isFlipped ? 'flipped' : ''} ${isNext && !isFlipped ? 'clickable' : ''} ${!isFlipped && !isNext ? 'locked' : ''}`}
      onClick={() => { if (isNext && !isFlipped) onFlip() }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-front-decoration">?</div>
          <span className="card-front-label">Hint {index + 1}</span>
        </div>
        <div className="card-back">
          <span className="card-back-label">Hint {index + 1}</span>
          <div className="card-back-content">
            {showContent && (
              isTyping ? (
                <TypewriterText text={content} onComplete={onTypingComplete} />
              ) : (
                content
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ClueOverlayProps {
  isInstructionsOpen: boolean
}

export const ClueOverlay = ({ isInstructionsOpen }: ClueOverlayProps) => {
  const {
    currentStep,
    isClueOverlayOpen,
    setClueOverlayOpen,
    getCurrentTargetLocation,
    activeModalLocation,
    isShaking,
    unlockedLocations,
  } = useMapState()

  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [typingIndex, setTypingIndex] = useState<number | null>(null)
  const [hasEntered, setHasEntered] = useState(false)

  const targetLocation = getCurrentTargetLocation()
  const clues = targetLocation?.clues || []

  // Progress bar data
  const progressPct = (unlockedLocations.length / locationData.length) * 100
  const lastUnlockedId = unlockedLocations[unlockedLocations.length - 1]
  const lastUnlocked = lastUnlockedId
    ? locationData.find((loc) => loc.id === lastUnlockedId)
    : null

  const isHidden = !!activeModalLocation || isInstructionsOpen

  // Play entrance animation once when becoming visible, then stop
  useEffect(() => {
    if (!isHidden) {
      setHasEntered(false)
      const timeout = setTimeout(() => setHasEntered(true), 450)
      return () => clearTimeout(timeout)
    }
  }, [isHidden])

  // Reset when step changes
  useEffect(() => {
    setFlippedCards(new Set())
    setTypingIndex(null)
  }, [currentStep])

  // Consume the context trigger
  useEffect(() => {
    if (isClueOverlayOpen) {
      setClueOverlayOpen(false)
    }
  }, [isClueOverlayOpen, setClueOverlayOpen])

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => new Set(prev).add(index))
    setTypingIndex(index)
  }

  // Next card to flip is the first un-flipped card
  const nextToFlip = clues.findIndex((_, i) => !flippedCards.has(i))

  // Hide when any modal is open
  if (isHidden) {
    return null
  }

  return (
    <div className={`clue-wrapper ${!hasEntered ? 'entering' : ''} ${isShaking ? 'shake' : ''}`}>
      <div className="clue-overlay">
        {/* Decorative corners */}
        <div className="clue-corner corner-tl" />
        <div className="clue-corner corner-tr" />
        <div className="clue-corner corner-bl" />
        <div className="clue-corner corner-br" />

        <div className="clue-inner">
          <div className="clue-cards-container">
            {clues.map((clue, index) => (
              <ClueCard
                key={index}
                index={index}
                content={clue}
                isFlipped={flippedCards.has(index)}
                isNext={index === nextToFlip}
                isTyping={typingIndex === index}
                onFlip={() => handleFlip(index)}
                onTypingComplete={() => setTypingIndex(null)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPct}%` }}
          >
            {lastUnlocked && (
              <img
                className="progress-icon"
                src={lastUnlocked.markerIcon}
                alt={lastUnlocked.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
