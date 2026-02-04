import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import './PhotoCarousel.css'

interface PhotoCarouselProps {
  photos: string[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export const PhotoCarousel = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: PhotoCarouselProps) => {
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < photos.length - 1

  // Drag state for touch/mouse swiping
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const isAnimating = useRef(false)

  const goNext = useCallback(() => {
    if (hasNext && !isAnimating.current) {
      isAnimating.current = true
      onNavigate(currentIndex + 1)
    }
  }, [hasNext, currentIndex, onNavigate])

  const goPrev = useCallback(() => {
    if (hasPrev && !isAnimating.current) {
      isAnimating.current = true
      onNavigate(currentIndex - 1)
    }
  }, [hasPrev, currentIndex, onNavigate])

  // Reset animation lock after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      isAnimating.current = false
    }, 400) // matches CSS transition duration
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, goNext, goPrev])

  // Scroll navigation (debounced via isAnimating)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isAnimating.current) return
      if (e.deltaY > 0 || e.deltaX > 0) goNext()
      if (e.deltaY < 0 || e.deltaX < 0) goPrev()
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [goNext, goPrev])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const dx = e.touches[0].clientX - dragStartX.current
    setDragOffset(dx)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    const threshold = 60
    if (dragOffset < -threshold) {
      goNext()
    } else if (dragOffset > threshold) {
      goPrev()
    }
    setDragOffset(0)
  }

  // Mouse drag handlers for desktop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX
    setIsDragging(true)
    setDragOffset(0)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStartX.current
    setDragOffset(dx)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = 60
    if (dragOffset < -threshold) {
      goNext()
    } else if (dragOffset > threshold) {
      goPrev()
    }
    setDragOffset(0)
  }

  // Compute track transform
  const baseTranslate = -(currentIndex * 100)
  const dragPercent = dragOffset / (window.innerWidth || 1) * 100
  const trackTransform = `translateX(${baseTranslate + dragPercent}%)`

  return (
    <div className="carousel-overlay" onClick={onClose}>
      {/* Close button */}
      <button className="carousel-close" onClick={onClose}>
        <X size={24} />
      </button>

      {/* Previous arrow */}
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={(e) => { e.stopPropagation(); goPrev() }}
        disabled={!hasPrev}
        style={{ '--arrow-opacity': hasPrev ? 1 : 0.3 } as CSSProperties}
      >
        <ChevronLeft size={32} />
      </button>

      {/* Sliding viewport */}
      <div
        className="carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="carousel-track"
          style={{
            transform: trackTransform,
            transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          {photos.map((photo, i) => (
            <div key={i} className="carousel-slide">
              <div className="carousel-polaroid-mat" onClick={(e) => e.stopPropagation()}>
                <img
                  src={photo}
                  alt={`Photo ${i + 1} of ${photos.length}`}
                  className="carousel-image"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} of {photos.length}
      </div>

      {/* Next arrow */}
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={(e) => { e.stopPropagation(); goNext() }}
        disabled={!hasNext}
        style={{ '--arrow-opacity': hasNext ? 1 : 0.3 } as CSSProperties}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}
