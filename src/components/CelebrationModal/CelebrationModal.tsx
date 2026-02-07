import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { fireHeartsConfetti, fireHeartsAtPosition, fireBigCelebration } from '../../utils/confetti'
import { TreasureChest } from './TreasureChest'
import './CelebrationModal.css'

type Phase = 'intro' | 'chest-closed' | 'chest-opening' | 'paper-emerging' | 'revealed' | 'loading'

const TREASURE_URL = 'https://www.hotels.com/trips/egti-8CL-PO5-JECZ/details/Zjg0MzZhYzItMzdhZi01NzdlLWJlMDAtZTczZjk5MWU4YWQ0OzViMzU4NzBmLWU2ZWYtNDEyMy04YzI3LWJmNDcwODc5MGQ1NV8w?tripsSandbox=1248693386,1034346041,2'

interface CelebrationModalProps {
  onClose: () => void
}

export const CelebrationModal = ({ onClose }: CelebrationModalProps) => {
  const [phase, setPhase] = useState<Phase>('intro')
  const [noButtonFlying, setNoButtonFlying] = useState(false)
  const [noButtonUnmounted, setNoButtonUnmounted] = useState(false)

  // Fire confetti on mount
  useEffect(() => {
    fireHeartsConfetti()
  }, [])

  // Timed phase transitions
  useEffect(() => {
    if (phase === 'intro') {
      const timer = setTimeout(() => setPhase('chest-closed'), 1500)
      return () => clearTimeout(timer)
    }
    if (phase === 'chest-opening') {
      const timer = setTimeout(() => setPhase('paper-emerging'), 800)
      return () => clearTimeout(timer)
    }
    if (phase === 'paper-emerging') {
      fireHeartsAtPosition(0.5, 0.4)
      const timer = setTimeout(() => setPhase('revealed'), 1200)
      return () => clearTimeout(timer)
    }
    if (phase === 'loading') {
      const timer = setTimeout(() => {
        window.open(TREASURE_URL, '_blank')
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [phase, onClose])

  const handleChestClick = () => {
    if (phase === 'chest-closed') {
      setPhase('chest-opening')
    }
  }

  const handleNoHover = () => {
    setNoButtonFlying(true)
    // After fly animation completes, unmount the button
    setTimeout(() => {
      setNoButtonUnmounted(true)
    }, 800)
  }

  return (
    <div className="celebration-overlay">
      <div className="celebration-container">
        {/* Decorative corners */}
        <div className="celeb-corner corner-tl" />
        <div className="celeb-corner corner-tr" />
        <div className="celeb-corner corner-bl" />
        <div className="celeb-corner corner-br" />

        <div className="celebration-content">
          <h2 className="celebration-title">Congratulations!</h2>

          <div className="celebration-divider">
            <span className="divider-line" />
            <Heart size={14} className="divider-heart" />
            <span className="divider-line" />
          </div>

          <p className="celebration-message">
            You've completed the treasure map!
          </p>

          {phase !== 'intro' && phase !== 'loading' && (
            <div className="chest-area">
              <TreasureChest
                isOpen={phase !== 'chest-closed'}
                showPaper={phase === 'paper-emerging' || phase === 'revealed'}
                onClick={handleChestClick}
                isClickable={phase === 'chest-closed'}
              />

              {phase === 'chest-closed' && (
                <p className="chest-hint">Tap the chest to read the important message inside...</p>
              )}
            </div>
          )}

          {(phase === 'paper-emerging' || phase === 'revealed') && (
            <div className="valentine-question">
              <p className="valentine-text">Be my Valentine?</p>
            </div>
          )}

          {phase === 'revealed' && (
            <div className={`celebration-buttons ${noButtonUnmounted ? 'yes-centered' : ''}`}>
              <button
                className="celebration-yes-btn"
                onClick={() => { fireBigCelebration(); setPhase('loading') }}
              >
                Yes!
              </button>
              {!noButtonUnmounted && (
                <button
                  className={`celebration-no-btn ${noButtonFlying ? 'flying-away' : ''}`}
                  onMouseEnter={handleNoHover}
                  onTouchStart={(e) => { e.preventDefault(); handleNoHover() }}
                >
                  No
                </button>
              )}
            </div>
          )}

          {phase === 'loading' && (
            <div className="treasure-loading">
              <p className="loading-text">Treasure Loading...</p>
              <div className="loading-bar-container">
                <div className="loading-bar-fill" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
