import { ChevronLeft, ChevronRight, MapPin, Heart } from 'lucide-react'
import { useMapState } from '../../context/MapStateContext'
import { locationData } from '../../locations/locationData'
import './LocationModal.css'

export const LocationModal = () => {
  const {
    activeModalLocation,
    isNewUnlock,
    closeModal,
    setClueOverlayOpen,
    unlockedLocations,
    openModal,
  } = useMapState()

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

  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < totalUnlocked - 1

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Decorative corners */}
        <div className="modal-corner corner-tl" />
        <div className="modal-corner corner-tr" />
        <div className="modal-corner corner-bl" />
        <div className="modal-corner corner-br" />

        <div className="modal-internal-container">
          {/* Content */}
          <div className="modal-content">
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
                <div className="modal-photos-placeholder">
                  [Photo gallery placeholder]
                </div>
              </div>
            )}

            {isNewUnlock && (
              <button className="modal-next-clue-btn" onClick={handleRevealNextClue}>
                Continue Adventure
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
