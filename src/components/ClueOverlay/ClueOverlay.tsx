import { useState, useRef, useCallback, useEffect } from 'react'
import { css } from '@emotion/css'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMapState } from '../../context/MapStateContext'
import './ClueOverlay.css'

export const ClueOverlay = () => {
  const { currentStep } = useMapState()
  const [isOpen, setIsOpen] = useState(false)
  const [isFullyOpened, setIsFullyOpened] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const observer = useRef<ResizeObserver | null>(null)

  const maxHeight = isOpen && isFullyOpened ? 'unset' : `${height}px`
  const overflow = isFullyOpened ? 'unset' : 'hidden'

  const updateScrollHeight = useCallback(() => {
    if (!contentRef.current) return
    setHeight(contentRef.current.scrollHeight)
  }, [])

  // Avoids stale closure issues
  const state = useRef({ isFullyOpened, isOpen })
  state.current = { isFullyOpened, isOpen }

  useEffect(() => {
    if (!contentRef.current) return

    if (isOpen && !isFullyOpened) {
      // Opening
      updateScrollHeight()
      if (!observer.current) {
        observer.current = new ResizeObserver(() => updateScrollHeight())
        observer.current.observe(contentRef.current)
      }
    } else if (isOpen && isFullyOpened) {
      // Fully open
      if (observer.current) {
        observer.current.disconnect()
        observer.current = null
      }
    } else if (!isOpen && isFullyOpened) {
      // Closing from open
      updateScrollHeight()
      requestAnimationFrame(() => {
        setIsFullyOpened(false)
        setHeight(0)
      })
    } else if (!isOpen && !isFullyOpened) {
      // Interruption: opening > closing
      if (observer.current) {
        observer.current.disconnect()
        observer.current = null
        setHeight(0)
      }
    }
  }, [isOpen, isFullyOpened, updateScrollHeight])

  useEffect(() => {
    return () => observer.current?.disconnect()
  }, [])

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.currentTarget !== e.target) return
      if (state.current.isOpen && !state.current.isFullyOpened) {
        setIsFullyOpened(true)
      }
    },
    []
  )

  const contentContainerStyle = css`
    transition: max-height 0.25s ease-in-out;
    max-height: ${maxHeight};
    overflow: ${overflow};
  `

  return (
    <div className="clue-overlay">
      <div
        className="clue-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>Clue #{currentStep}</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div
        className={contentContainerStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        <div ref={contentRef} className="clue-content">
          <p>This is a clue</p>
        </div>
      </div>
    </div>
  )
}
