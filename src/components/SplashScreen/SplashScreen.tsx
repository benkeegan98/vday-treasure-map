import { Heart, MapPin, Compass } from 'lucide-react'
import './SplashScreen.css'

interface SplashScreenProps {
  onEnter: () => void
}

export const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  return (
    <div className="splash-screen">
      <div className="splash-container">
        {/* Decorative corners */}
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        {/* Header with icons */}
        <div className="splash-header">
          <Compass className="splash-icon compass" size={32} />
          <Heart className="splash-icon heart" size={28} />
          <MapPin className="splash-icon pin" size={32} />
        </div>

        {/* Title */}
        <h1 className="splash-title">Caitlin and Ben's</h1>
        <h2 className="splash-subtitle">Valentine's Treasure Map</h2>

        {/* Decorative divider */}
        <div className="splash-divider">
          <span className="divider-line" />
          <Heart size={16} className="divider-heart" />
          <span className="divider-line" />
        </div>

        {/* Message */}
        <p className="splash-message">
          A journey through our favorite memories...
        </p>

        {/* Enter button */}
        <button className="splash-enter-btn" onClick={onEnter}>
          Begin Adventure
        </button>

        {/* Footer flourish */}
        <div className="splash-footer">
          <span className="footer-flourish">~ ♥ ~</span>
        </div>
      </div>
    </div>
  )
}
