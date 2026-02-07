import { Heart, MapPin, Compass } from 'lucide-react'
import './SplashScreen.css'

// All splash screen photos
const splashPhotos = [
  '/images/splash/59dd8f87-6d83-4753-9f2e-2065b1d7b4c2 Small.jpeg',
  '/images/splash/E9123DC3-964E-40E0-82F3-3A43CD1B9519 Small.jpeg',
  '/images/splash/IMG_0812 Small.jpeg',
  '/images/splash/IMG_0813 Small.jpeg',
  '/images/splash/IMG_0881 Small.jpeg',
  '/images/splash/IMG_1110 Small.jpeg',
  '/images/splash/IMG_1122 Small.jpeg',
  '/images/splash/IMG_1125 Small.jpeg',
  '/images/splash/IMG_1135 Small.jpeg',
  '/images/splash/IMG_1136 Small.jpeg',
  '/images/splash/IMG_1139 Small.jpeg',
  '/images/splash/IMG_1163 Small.jpeg',
  '/images/splash/IMG_1185 Small.jpeg',
  '/images/splash/IMG_1188 Small.jpeg',
  '/images/splash/IMG_1662 Small.jpeg',
  '/images/splash/IMG_3101 Small.jpeg',
  '/images/splash/IMG_3103 Small.jpeg',
  '/images/splash/IMG_3230 Small.jpeg',
  '/images/splash/IMG_3250 Small.jpeg',
  '/images/splash/IMG_3275 Small.jpeg',
  '/images/splash/IMG_3280 Small.jpeg',
  '/images/splash/IMG_3282 Small.jpeg',
  '/images/splash/IMG_3343 Small.jpeg',
  '/images/splash/IMG_3359 Small.jpeg',
  '/images/splash/IMG_3386 Small.jpeg',
  '/images/splash/IMG_3389 Small.jpeg',
  '/images/splash/IMG_3405 Small.jpeg',
  '/images/splash/IMG_3417 Small.jpeg',
  '/images/splash/IMG_3420 Small.jpeg',
  '/images/splash/IMG_3427 Small.jpeg',
  '/images/splash/IMG_3463 Small.jpeg',
  '/images/splash/IMG_3473 Small.jpeg',
  '/images/splash/IMG_3476 Small.jpeg',
  '/images/splash/IMG_3510 Small.jpeg',
  '/images/splash/IMG_3514 Small.jpeg',
  '/images/splash/IMG_3528 Small.jpeg',
  '/images/splash/IMG_3535 Small.jpeg',
  '/images/splash/IMG_3541 Small.jpeg',
  '/images/splash/IMG_3549 Small.jpeg',
  '/images/splash/IMG_3557 Small.jpeg',
  '/images/splash/IMG_3583 Small.jpeg',
  '/images/splash/IMG_3589 Small.jpeg',
  '/images/splash/IMG_3596 Small.jpeg',
  '/images/splash/IMG_3597 Small.jpeg',
  '/images/splash/IMG_3602 Small.jpeg',
  '/images/splash/IMG_3623 Small.jpeg',
  '/images/splash/IMG_3631 Small.jpeg',
  '/images/splash/IMG_3633 Small.jpeg',
  '/images/splash/IMG_3645 Small.jpeg',
  '/images/splash/IMG_3661 Small.jpeg',
  '/images/splash/IMG_3678 Small.jpeg',
  '/images/splash/IMG_3685 Small.jpeg',
  '/images/splash/IMG_3725 Small.jpeg',
  '/images/splash/IMG_3737 Small.jpeg',
  '/images/splash/IMG_3742 Small.jpeg',
  '/images/splash/IMG_3744 Small.jpeg',
  '/images/splash/IMG_3747 Small.jpeg',
  '/images/splash/IMG_3780 Small.jpeg',
  '/images/splash/IMG_3791 Small.jpeg',
  '/images/splash/IMG_3861 Small.jpeg',
  '/images/splash/IMG_3876 Small.jpeg',
  '/images/splash/IMG_3895 Small.jpeg',
  '/images/splash/IMG_3899 Small.jpeg',
  '/images/splash/IMG_3909 Small.jpeg',
  '/images/splash/IMG_3922 Small.jpeg',
  '/images/splash/IMG_3936 Small.jpeg',
  '/images/splash/IMG_3944 Small.jpeg',
  '/images/splash/IMG_4154 Small.jpeg',
  '/images/splash/IMG_4158 Small.jpeg',
  '/images/splash/IMG_4272 Small.jpeg',
  '/images/splash/IMG_4316 Small.jpeg',
  '/images/splash/IMG_4317 Small.jpeg',
  '/images/splash/IMG_4318 Small.jpeg',
  '/images/splash/IMG_5463 Small.jpeg',
  '/images/splash/IMG_6077 Small.jpeg',
  '/images/splash/IMG_7138 Small.jpeg',
]

// Positions for 76 polaroids covering all edges with multiple layers
// Each position: side, along (%), rotate (deg), inward (px from edge)
const polaroidPositions = [
  // ═══ TOP EDGE - outer row ═══
  { side: 'top', along: 3, rotate: -15, inward: 20 },
  { side: 'top', along: 12, rotate: 8, inward: 15 },
  { side: 'top', along: 22, rotate: -6, inward: 25 },
  { side: 'top', along: 32, rotate: 12, inward: 10 },
  { side: 'top', along: 42, rotate: -10, inward: 20 },
  { side: 'top', along: 52, rotate: 5, inward: 18 },
  { side: 'top', along: 62, rotate: -8, inward: 12 },
  { side: 'top', along: 72, rotate: 14, inward: 22 },
  { side: 'top', along: 82, rotate: -4, inward: 16 },
  { side: 'top', along: 92, rotate: 9, inward: 20 },
  // TOP EDGE - inner row
  { side: 'top', along: 8, rotate: 10, inward: 90 },
  { side: 'top', along: 18, rotate: -12, inward: 85 },
  { side: 'top', along: 28, rotate: 7, inward: 95 },
  { side: 'top', along: 38, rotate: -5, inward: 80 },
  { side: 'top', along: 48, rotate: 11, inward: 88 },
  { side: 'top', along: 58, rotate: -9, inward: 92 },
  { side: 'top', along: 68, rotate: 6, inward: 82 },
  { side: 'top', along: 78, rotate: -11, inward: 98 },
  { side: 'top', along: 88, rotate: 8, inward: 85 },
  { side: 'top', along: 98, rotate: -7, inward: 90 },

  // ═══ BOTTOM EDGE - outer row ═══
  { side: 'bottom', along: 5, rotate: 12, inward: 18 },
  { side: 'bottom', along: 15, rotate: -8, inward: 22 },
  { side: 'bottom', along: 25, rotate: 6, inward: 15 },
  { side: 'bottom', along: 35, rotate: -14, inward: 25 },
  { side: 'bottom', along: 45, rotate: 9, inward: 12 },
  { side: 'bottom', along: 55, rotate: -5, inward: 20 },
  { side: 'bottom', along: 65, rotate: 11, inward: 16 },
  { side: 'bottom', along: 75, rotate: -10, inward: 24 },
  { side: 'bottom', along: 85, rotate: 7, inward: 18 },
  { side: 'bottom', along: 95, rotate: -13, inward: 14 },
  // BOTTOM EDGE - inner row
  { side: 'bottom', along: 10, rotate: -6, inward: 88 },
  { side: 'bottom', along: 20, rotate: 10, inward: 82 },
  { side: 'bottom', along: 30, rotate: -12, inward: 95 },
  { side: 'bottom', along: 40, rotate: 8, inward: 78 },
  { side: 'bottom', along: 50, rotate: -7, inward: 90 },
  { side: 'bottom', along: 60, rotate: 13, inward: 85 },
  { side: 'bottom', along: 70, rotate: -9, inward: 92 },
  { side: 'bottom', along: 80, rotate: 5, inward: 80 },
  { side: 'bottom', along: 90, rotate: -11, inward: 88 },

  // ═══ LEFT EDGE - outer row ═══
  { side: 'left', along: 5, rotate: 18, inward: 15 },
  { side: 'left', along: 15, rotate: -12, inward: 22 },
  { side: 'left', along: 25, rotate: 8, inward: 18 },
  { side: 'left', along: 35, rotate: -15, inward: 12 },
  { side: 'left', along: 45, rotate: 10, inward: 25 },
  { side: 'left', along: 55, rotate: -6, inward: 20 },
  { side: 'left', along: 65, rotate: 14, inward: 16 },
  { side: 'left', along: 75, rotate: -9, inward: 22 },
  { side: 'left', along: 85, rotate: 7, inward: 18 },
  { side: 'left', along: 95, rotate: -13, inward: 14 },
  // LEFT EDGE - inner row
  { side: 'left', along: 10, rotate: -10, inward: 85 },
  { side: 'left', along: 22, rotate: 12, inward: 78 },
  { side: 'left', along: 34, rotate: -7, inward: 90 },
  { side: 'left', along: 46, rotate: 9, inward: 82 },
  { side: 'left', along: 58, rotate: -14, inward: 88 },
  { side: 'left', along: 70, rotate: 6, inward: 80 },
  { side: 'left', along: 82, rotate: -11, inward: 92 },
  { side: 'left', along: 94, rotate: 8, inward: 85 },

  // ═══ RIGHT EDGE - outer row ═══
  { side: 'right', along: 5, rotate: -16, inward: 18 },
  { side: 'right', along: 15, rotate: 10, inward: 24 },
  { side: 'right', along: 25, rotate: -8, inward: 15 },
  { side: 'right', along: 35, rotate: 14, inward: 20 },
  { side: 'right', along: 45, rotate: -11, inward: 25 },
  { side: 'right', along: 55, rotate: 7, inward: 18 },
  { side: 'right', along: 65, rotate: -13, inward: 22 },
  { side: 'right', along: 75, rotate: 9, inward: 16 },
  { side: 'right', along: 85, rotate: -6, inward: 20 },
  { side: 'right', along: 95, rotate: 12, inward: 14 },
  // RIGHT EDGE - inner row
  { side: 'right', along: 8, rotate: 11, inward: 82 },
  { side: 'right', along: 20, rotate: -9, inward: 88 },
  { side: 'right', along: 32, rotate: 6, inward: 78 },
  { side: 'right', along: 44, rotate: -12, inward: 92 },
  { side: 'right', along: 56, rotate: 8, inward: 85 },
  { side: 'right', along: 68, rotate: -7, inward: 80 },
  { side: 'right', along: 80, rotate: 13, inward: 90 },
  { side: 'right', along: 92, rotate: -10, inward: 84 },
]

interface SplashScreenProps {
  onEnter: () => void
}

export const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  return (
    <div className="splash-screen">
      {/* Polaroid collage border */}
      <div className="polaroid-border">
        {splashPhotos.map((photo, index) => {
          const pos = polaroidPositions[index % polaroidPositions.length]
          return (
            <div
              key={index}
              className={`border-polaroid border-polaroid-${pos.side}`}
              style={{
                '--along': `${pos.along}%`,
                '--rotate': `${pos.rotate}deg`,
                '--inward': `${pos.inward}px`,
                zIndex: index,
              } as React.CSSProperties}
            >
              <img src={photo} alt="" />
            </div>
          )
        })}
      </div>

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
        <h1 className="splash-title">Caitlin's</h1>
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
