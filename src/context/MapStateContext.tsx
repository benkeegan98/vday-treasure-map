import { createContext, useContext, useState, ReactNode } from 'react'

interface MapStateContextType {
  currentStep: number
  unlockedLocations: number[]
  unlockLocation: (locationId: number) => void
  isLocationUnlocked: (locationId: number) => boolean
  resetGame: () => void
}

const MapStateContext = createContext<MapStateContextType | undefined>(undefined)

interface MapStateProviderProps {
  children: ReactNode
}

export const MapStateProvider = ({ children }: MapStateProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [unlockedLocations, setUnlockedLocations] = useState<number[]>([])

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
  }

  return (
    <MapStateContext.Provider
      value={{
        currentStep,
        unlockedLocations,
        unlockLocation,
        isLocationUnlocked,
        resetGame,
      }}
    >
      {children}
    </MapStateContext.Provider>
  )
}

export const useMapState = (): MapStateContextType => {
  const context = useContext(MapStateContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}
