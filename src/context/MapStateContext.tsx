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
  openModal: (location: Location) => void
  closeModal: () => void
  // Clue overlay state
  isClueOverlayOpen: boolean
  setClueOverlayOpen: (open: boolean) => void
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
  const [isClueOverlayOpen, setIsClueOverlayOpen] = useState(false)

  const unlockLocation = (locationId: number) => {
    if (!unlockedLocations.includes(locationId)) {
      setUnlockedLocations((prev) => [...prev, locationId])
      setCurrentStep((prev) => prev + 1)
    }
  }

  const isLocationUnlocked = (locationId: number) => {
    return unlockedLocations.includes(locationId)
  }

  const resetGame = () => {
    setCurrentStep(1)
    setUnlockedLocations([])
    setActiveModalLocation(null)
    setIsClueOverlayOpen(false)
  }

  const openModal = (location: Location) => {
    setActiveModalLocation(location)
  }

  const closeModal = () => {
    setActiveModalLocation(null)
  }

  const setClueOverlayOpen = (open: boolean) => {
    setIsClueOverlayOpen(open)
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
        openModal,
        closeModal,
        isClueOverlayOpen,
        setClueOverlayOpen,
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
