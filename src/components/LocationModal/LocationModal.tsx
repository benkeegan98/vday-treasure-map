import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Heart } from 'lucide-react'
import { useMapState } from '../../context/MapStateContext'
import { locationData } from '../../locations/locationData'
import { PhotoCarousel } from '../PhotoCarousel/PhotoCarousel'
import './LocationModal.css'

// Predefined scatter positions for the polaroid pile
const SCATTER = [
  { r: -6, x: 0, y: 0 },
  { r: 4, x: 10, y: -5 },
  { r: -2, x: -8, y: 3 },
  { r: 5, x: 12, y: -8 },
  { r: -4, x: -5, y: 6 },
  { r: 7, x: 8, y: -3 },
  { r: -5, x: -12, y: 5 },
  { r: 3, x: 6, y: -6 },
  { r: -7, x: -3, y: 8 },
  { r: 2, x: 10, y: -4 },
]

const getPolaroidStyle = (index: number, total: number): CSSProperties => {
  if (total === 1) return { zIndex: 1 }
  const s = SCATTER[index % SCATTER.length]
  return {
    '--r': `${s.r}deg`,
    '--x': `${s.x}px`,
    '--y': `${s.y}px`,
    zIndex: total - index,
  } as CSSProperties
}

interface LocationModalProps {
  onCelebrate?: () => void
}

export const LocationModal = ({ onCelebrate }: LocationModalProps) => {
  const {
    activeModalLocation,
    isNewUnlock,
    closeModal,
    setClueOverlayOpen,
    unlockedLocations,
    openModal,
    flyToLocation,
  } = useMapState()

  const prevLocationRef = useRef<typeof activeModalLocation>(null)
  const [carouselOpen, setCarouselOpen] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Fly to location when it changes
  useEffect(() => {
    if (activeModalLocation && activeModalLocation !== prevLocationRef.current) {
      flyToLocation(activeModalLocation)
      prevLocationRef.current = activeModalLocation
    }
  }, [activeModalLocation, flyToLocation])

  // Reset ref when modal closes
  useEffect(() => {
    if (!activeModalLocation) {
      prevLocationRef.current = null
    }
  }, [activeModalLocation])

  if (!activeModalLocation) return null

  // Get unlocked locations in order
  const unlockedLocationData = locationData.filter(loc =>
    unlockedLocations.includes(loc.id)
  )

  // Find current index in unlocked list
  const currentIndex = unlockedLocationData.findIndex(
    loc => loc.id === activeModalLocation.id
  )
  const totalUnlocked = unlockedLocationData.length

  const handlePrevious = () => {
    if (currentIndex > 0) {
      openModal(unlockedLocationData[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < totalUnlocked - 1) {
      openModal(unlockedLocationData[currentIndex + 1])
    }
  }

  const handleRevealNextClue = () => {
    closeModal()
    setClueOverlayOpen(true)
  }

  const isFinalLocation = activeModalLocation.id === locationData.length
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < totalUnlocked - 1

  return (
    <>
      {/* Overlay for clicking outside to close */}
      <div className="panel-overlay" onClick={closeModal} />

      {/* Side panel */}
      <div className="location-panel">
        {/* Decorative corners */}
        <div className="modal-corner corner-tl" />
        <div className="modal-corner corner-tr" />
        <div className="modal-corner corner-bl" />
        <div className="modal-corner corner-br" />

        <div className="modal-internal-container">
          {/* Content */}
          <div className={`modal-content ${isNewUnlock ? 'new-unlock' : ''}`}>
            {isNewUnlock && (
              <>
                <div className="modal-unlocked-icon">
                  <MapPin size={32} />
                </div>
                <h2 className="modal-title">Memory Unlocked!</h2>
              </>
            )}

            {/* Navigation carousel - centered above location name */}
            {totalUnlocked > 1 && (
              <div className="modal-navigation">
                <button
                  className="modal-nav-btn"
                  onClick={handlePrevious}
                  disabled={!hasPrevious}
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="modal-nav-counter">
                  {currentIndex + 1} of {totalUnlocked}
                </span>
                <button
                  className="modal-nav-btn"
                  onClick={handleNext}
                  disabled={!hasNext}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}

            <h3 className="modal-location-name">{activeModalLocation.name}</h3>

            {/* Divider */}
            <div className="modal-divider">
              <span className="divider-line" />
              <Heart size={14} className="divider-heart" />
              <span className="divider-line" />
            </div>

            <div className="modal-section">
              <p className="modal-description">
                {activeModalLocation.description || 'A special place for us...'}
              </p>
            </div>

            {activeModalLocation.photos && activeModalLocation.photos.length > 0 && (
              <div className="modal-section">
                <div className="polaroid-gallery">
                  {activeModalLocation.photos.map((photo, i) => (
                    <div
                      key={i}
                      className="polaroid"
                      style={getPolaroidStyle(i, activeModalLocation.photos!.length)}
                      onClick={() => { setCarouselIndex(i); setCarouselOpen(true) }}
                    >
                      <img src={photo} alt={`${activeModalLocation.name} photo ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isNewUnlock && (
              <button
                className="modal-next-clue-btn"
                onClick={isFinalLocation && onCelebrate ? onCelebrate : handleRevealNextClue}
              >
                {isFinalLocation ? 'Claim Your Treasure' : 'Continue Adventure'}
              </button>
            )}
          </div>
        </div>
      </div>

      {carouselOpen && activeModalLocation.photos && (
        <PhotoCarousel
          photos={activeModalLocation.photos}
          currentIndex={carouselIndex}
          onClose={() => setCarouselOpen(false)}
          onNavigate={setCarouselIndex}
        />
      )}
    </>
  )
}
