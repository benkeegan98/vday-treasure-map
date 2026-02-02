import { ChevronLeft, ChevronRight, X } from 'lucide-react'
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
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
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
          </div>
          <button className="modal-close" onClick={closeModal}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          {isNewUnlock && <h2 className="modal-title">Location Unlocked!</h2>}

          <h3 className="modal-location-name">{activeModalLocation.name}</h3>

          <div className="modal-section">
            <h4>Description</h4>
            <p>{activeModalLocation.description || 'A special place for us...'}</p>
          </div>

          {activeModalLocation.photos && activeModalLocation.photos.length > 0 && (
            <div className="modal-section">
              <h4>Photos</h4>
              <div className="modal-photos-placeholder">
                [Photo gallery placeholder]
              </div>
            </div>
          )}
          {isNewUnlock && (
            <button className="modal-next-clue-btn" onClick={handleRevealNextClue}>
              Reveal Next Clue
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
