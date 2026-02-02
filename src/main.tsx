import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MapStateProvider } from './context/MapStateContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapStateProvider>
      <App />
    </MapStateProvider>
  </StrictMode>,
)
