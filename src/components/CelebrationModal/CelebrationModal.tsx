import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { fireHeartsConfetti, fireHeartsAtPosition } from '../../utils/confetti'
import { TreasureChest } from './TreasureChest'
import './CelebrationModal.css'

type Phase = 'intro' | 'chest-closed' | 'chest-opening' | 'paper-emerging' | 'revealed'

interface CelebrationModalProps {
  onClose: () => void
}

export const CelebrationModal = ({ onClose }: CelebrationModalProps) => {
  const [phase, setPhase] = useState<Phase>('intro')
  const [noButtonGone, setNoButtonGone] = useState(false)

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
  }, [phase])

  const handleChestClick = () => {
    if (phase === 'chest-closed') {
      setPhase('chest-opening')
    }
  }

  const handleNoHover = () => {
    setNoButtonGone(true)
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

          {phase !== 'intro' && (
            <div className="chest-area">
              <TreasureChest
                isOpen={phase !== 'chest-closed'}
                showPaper={phase === 'paper-emerging' || phase === 'revealed'}
                onClick={handleChestClick}
                isClickable={phase === 'chest-closed'}
              />

              {phase === 'chest-closed' && (
                <p className="chest-hint">Tap the chest to claim your treasure...</p>
              )}
            </div>
          )}

          {(phase === 'paper-emerging' || phase === 'revealed') && (
            <div className="valentine-question">
              <p className="valentine-text">Be my Valentine?</p>
            </div>
          )}

          {phase === 'revealed' && (
            <div className={`celebration-buttons ${noButtonGone ? 'no-gone' : ''}`}>
              <button
                className="celebration-yes-btn"
                onClick={() => { window.open('/valentine.pdf', '_blank'); onClose() }}
              >
                Yes!
              </button>
              <button
                className={`celebration-no-btn ${noButtonGone ? 'flying-away' : ''}`}
                onMouseEnter={handleNoHover}
                onTouchStart={(e) => { e.preventDefault(); handleNoHover() }}
              >
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
