import { MapPin, Heart, Compass } from 'lucide-react'
import './InstructionsModal.css'

interface InstructionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const InstructionsModal = ({ isOpen, onClose }: InstructionsModalProps) => {
  if (!isOpen) return null

  return (
    <div className="instructions-overlay" onClick={onClose}>
      <div className="instructions-container" onClick={(e) => e.stopPropagation()}>
        {/* Decorative corners */}
        <div className="instructions-corner corner-tl" />
        <div className="instructions-corner corner-tr" />
        <div className="instructions-corner corner-bl" />
        <div className="instructions-corner corner-br" />

        {/* Header */}
        <div className="instructions-header" />

        {/* Content */}
        <div className="instructions-content">
          {/* Icon header */}
          <div className="instructions-icons">
            <Compass className="instructions-icon" size={28} />
            <Heart className="instructions-icon heart" size={24} />
            <MapPin className="instructions-icon" size={28} />
          </div>

          <h2 className="instructions-title">Welcome, Pookie!</h2>

          <div className="instructions-divider">
            <span className="divider-line" />
            <Heart size={14} className="divider-heart" />
            <span className="divider-line" />
          </div>

          <div className="instructions-body">
            <p className="instructions-intro">
              I put together a little map for you to explore our most treasured memories together.
            </p>

            <div className="instructions-steps">
              <div className="instruction-step">
                <span className="step-number">1</span>
                <p>Read the clues at the bottom of the screen to help you find the next location.</p>
              </div>
              <div className="instruction-step">
                <span className="step-number">2</span>
                <p>Tap on the map where you think the location is hidden</p>
              </div>
              <div className="instruction-step">
                <span className="step-number">3</span>
                <p>If you're close enough, the memory will be unlocked, and the next set of clues will be revealed.</p>
              </div>
              <div className="instruction-step">
                <span className="step-number">4</span>
                <p>You can revisit unlocked memories anytime by tapping their markers</p>
              </div>
            </div>

            <p className="instructions-hint">
              Stuck? Tap the hint cards to reveal more clues.
            </p>
          </div>

          <button className="instructions-start-btn" onClick={onClose}>
            Let's Begin!
          </button>

          <div className="instructions-footer">
            <span className="footer-flourish">~ Happy Valentine's Day ~</span>
          </div>
        </div>
      </div>
    </div>
  )
}
