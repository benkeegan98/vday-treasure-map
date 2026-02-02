import { createContext, useContext, useState, ReactNode } from 'react'
import { locationData, Location } from '../locations/locationData'

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
