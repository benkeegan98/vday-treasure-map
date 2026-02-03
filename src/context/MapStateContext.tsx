import { createContext, useContext, useState, useRef, ReactNode } from 'react'
import { locationData, Location } from '../locations/locationData'

// Type for the flyTo callback function
type FlyToCallback = (location: Location) => void

interface MapStateContextType {
  currentStep: number
  unlockedLocations: number[]
  unlockLocation: (locationId: number) => void
  isLocationUnlocked: (locationId: number) => boolean
  resetGame: () => void
  // Modal state
  activeModalLocation: Location | null
  isNewUnlock: boolean
  openModal: (location: Location, isNew?: boolean) => void
  closeModal: () => void
  // Clue overlay state
  isClueOverlayOpen: boolean
  setClueOverlayOpen: (open: boolean) => void
  // Wrong tap shake
  isShaking: boolean
  triggerWrongTapShake: () => void
  // Get current target location
  getCurrentTargetLocation: () => Location | undefined
  // Fly-to registration
  registerFlyTo: (callback: FlyToCallback) => void
  flyToLocation: (location: Location) => void
}

const MapStateContext = createContext<MapStateContextType | undefined>(undefined)

interface MapStateProviderProps {
  children: ReactNode
}

export const MapStateProvider = ({ children }: MapStateProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [unlockedLocations, setUnlockedLocations] = useState<number[]>([])
  const [activeModalLocation, setActiveModalLocation] = useState<Location | null>(null)
  const [isNewUnlock, setIsNewUnlock] = useState(false)
  const [isClueOverlayOpen, setIsClueOverlayOpen] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const flyToCallbackRef = useRef<FlyToCallback | null>(null)

  const unlockLocation = (locationId: number) => {
    if (!unlockedLocations.includes(locationId)) {
      setUnlockedLocations((prev) => [...prev, locationId])
      setCurrentStep((prev) => prev + 1)
      setClueOverlayOpen(false)
    }
  }

  const isLocationUnlocked = (locationId: number) => {
    return unlockedLocations.includes(locationId)
  }

  const resetGame = () => {
    setCurrentStep(1)
    setUnlockedLocations([])
    setActiveModalLocation(null)
    setIsNewUnlock(false)
    setIsClueOverlayOpen(false)
  }

  const openModal = (location: Location, isNew: boolean = false) => {
    setActiveModalLocation(location)
    setIsNewUnlock(isNew)
  }

  const closeModal = () => {
    setActiveModalLocation(null)
    setIsNewUnlock(false)
  }

  const setClueOverlayOpen = (open: boolean) => {
    setIsClueOverlayOpen(open)
  }

  const triggerWrongTapShake = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
  }

  const getCurrentTargetLocation = (): Location | undefined => {
    return locationData.find((loc) => loc.id === currentStep)
  }

  const registerFlyTo = (callback: FlyToCallback) => {
    flyToCallbackRef.current = callback
  }

  const flyToLocation = (location: Location) => {
    if (flyToCallbackRef.current) {
      flyToCallbackRef.current(location)
    }
  }

  return (
    <MapStateContext.Provider
      value={{
        currentStep,
        unlockedLocations,
        unlockLocation,
        isLocationUnlocked,
        resetGame,
        activeModalLocation,
        isNewUnlock,
        openModal,
        closeModal,
        isClueOverlayOpen,
        setClueOverlayOpen,
        isShaking,
        triggerWrongTapShake,
        getCurrentTargetLocation,
        registerFlyTo,
        flyToLocation,
      }}
    >
      {children}
    </MapStateContext.Provider>
  )
}

export const useMapState = (): MapStateContextType => {
  const context = useContext(MapStateContext)
  if (context === undefined) {
    throw new Error('useMapState must be used within a MapStateProvider')
  }
  return context
}
