import { useState } from 'react'
import './App.css'
import { SplashScreen } from './components/SplashScreen/SplashScreen'
import { MapScreen } from './components/Map/MapScreen'

function App() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="app">
      {showMap ? (
        <MapScreen />
      ) : (
        <SplashScreen onEnter={() => setShowMap(true)} />
      )}
    </div>
  )
}

export default App
