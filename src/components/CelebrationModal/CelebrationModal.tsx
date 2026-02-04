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
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [noAttempts, setNoAttempts] = useState(0)

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
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 80
    setNoPosition({ x, y })
    setNoAttempts(prev => prev + 1)
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
            <div className="celebration-buttons">
              <button
                className="celebration-yes-btn"
                onClick={() => { window.open('/valentine.pdf', '_blank'); onClose() }}
              >
                Yes!
              </button>
              <div className="no-btn-container">
                <button
                  className="celebration-no-btn"
                  style={{
                    transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    fontSize: noAttempts > 5 ? '24px' : '14px',
                  }}
                  onMouseEnter={handleNoHover}
                  onTouchStart={(e) => { e.preventDefault(); handleNoHover() }}
                >
                  {noAttempts > 5 ? '😑' : 'No'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
