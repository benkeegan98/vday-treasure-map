import { useState, useEffect } from 'react'
import { useMapState } from '../../context/MapStateContext'
import './ClueOverlay.css'

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
  } = useMapState()

  const [visibleClueCount, setVisibleClueCount] = useState(1)

  const targetLocation = getCurrentTargetLocation()
  const clues = targetLocation?.clues || []
  const hasMoreClues = visibleClueCount < clues.length

  // Reset visible clue count when step changes
  useEffect(() => {
    setVisibleClueCount(1)
  }, [currentStep])

  // Consume the context trigger (reset it)
  useEffect(() => {
    if (isClueOverlayOpen) {
      setClueOverlayOpen(false)
    }
  }, [isClueOverlayOpen, setClueOverlayOpen])

  const handleRevealNextClue = () => {
    if (hasMoreClues) {
      setVisibleClueCount((prev) => prev + 1)
    }
  }

  // Hide when any modal is open
  if (activeModalLocation || isInstructionsOpen) {
    return null
  }

  return (
    <div className={`clue-overlay ${isShaking ? 'shake' : ''}`}>
      {/* Decorative corners */}
      <div className="clue-corner corner-tl" />
      <div className="clue-corner corner-tr" />
      <div className="clue-corner corner-bl" />
      <div className="clue-corner corner-br" />

      <div className="clue-inner">
        <h2 className="clue-title">Clue #{currentStep}</h2>

        <div className="clue-content">
          {clues.length === 0 ? (
            <p className="clue-text">No clues available yet...</p>
          ) : (
            <>
              {clues.slice(0, visibleClueCount).map((clue, index) => (
                <p
                  key={index}
                  className={`clue-text ${index === visibleClueCount - 1 && visibleClueCount > 1 ? 'clue-fade-in' : ''}`}
                >
                  {clue}
                </p>
              ))}
              {hasMoreClues && (
                <button className="reveal-clue-btn" onClick={handleRevealNextClue}>
                  Show another clue
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
