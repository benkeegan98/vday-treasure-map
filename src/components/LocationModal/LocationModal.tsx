import { X } from 'lucide-react'
import { useMapState } from '../../context/MapStateContext'
import './LocationModal.css'

export const LocationModal = () => {
  const { activeModalLocation, closeModal, setClueOverlayOpen } = useMapState()

  if (!activeModalLocation) return null

  const handleRevealNextClue = () => {
    closeModal()
    setClueOverlayOpen(true)
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          <X size={24} />
        </button>

        <h2 className="modal-title">Location Unlocked!</h2>
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

        <button className="modal-next-clue-btn" onClick={handleRevealNextClue}>
          Reveal Next Clue
        </button>
      </div>
    </div>
  )
}
