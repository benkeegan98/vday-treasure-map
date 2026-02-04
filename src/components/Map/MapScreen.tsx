import { useRef, useEffect, useCallback, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { Info } from 'lucide-react'

import 'mapbox-gl/dist/mapbox-gl.css'

import '../../App.css'
import { ClueOverlay } from '../ClueOverlay/ClueOverlay'
import { LocationModal } from '../LocationModal/LocationModal'
import { InstructionsModal } from '../InstructionsModal/InstructionsModal'
import { CelebrationModal } from '../CelebrationModal/CelebrationModal'
import { useMapState } from '../../context/MapStateContext'
import { locationData } from '../../locations/locationData'
import { getDistanceInMeters } from '../../utils/distance'
import { fireHeartsConfetti } from '../../utils/confetti'

export const MapScreen = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<Map<number, mapboxgl.Marker>>(new Map())
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(true)
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false)

  const {
    unlockedLocations,
    unlockLocation,
    openModal,
    closeModal,
    getCurrentTargetLocation,
    triggerWrongTapShake,
    registerFlyTo,
  } = useMapState()

  // Panel width for fly-to padding calculation (panel width 380 + left margin 24 + extra buffer)
  const PANEL_WIDTH = 430

  // Use refs to avoid stale closures in map event handlers
  const stateRef = useRef({ getCurrentTargetLocation, unlockLocation, openModal, triggerWrongTapShake })
  stateRef.current = { getCurrentTargetLocation, unlockLocation, openModal, triggerWrongTapShake }

  // Add a marker to the map for an unlocked location
  const addMarkerToMap = useCallback((locationId: number) => {
    if (!mapRef.current || markersRef.current.has(locationId)) return

    const location = locationData.find((loc) => loc.id === locationId)
    if (!location) return

    // Create custom marker element with SVG icon
    const el = document.createElement('div')
    el.className = 'unlocked-marker'
    el.style.cursor = 'pointer'
    el.style.width = '40px'
    el.style.height = '48px'

    // Create img element for the SVG
    const img = document.createElement('img')
    img.src = location.markerIcon
    img.alt = location.name
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.filter = 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))'
    el.appendChild(img)

    const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([location.long, location.lat])
      .addTo(mapRef.current)

    // Click marker to reopen modal
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      stateRef.current.openModal(location)
    })

    markersRef.current.set(locationId, marker)
  }, [])

  // Initialize map
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
    if (mapContainerRef.current && !mapRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: import.meta.env.VITE_MAPBOX_STYLE_URL,
        center: [-117.249924, 32.747252],
        zoom: 13,
      })

      map.addControl(new mapboxgl.NavigationControl(), 'top-left')

      // Set custom cursor - override Mapbox's default grab/grabbing cursors
      const customCursor = 'url(/cursors/treasure-cursor.svg) 16 16, crosshair'
      const canvas = map.getCanvas()

      const setCursor = () => {
        canvas.style.cursor = customCursor
      }

      // Set initially and on all relevant events
      setCursor()
      map.on('load', setCursor)
      map.on('idle', setCursor)
      map.on('dragstart', setCursor)
      map.on('drag', setCursor)
      map.on('dragend', setCursor)
      map.on('movestart', setCursor)
      map.on('moveend', setCursor)
      map.on('mousedown', setCursor)
      map.on('mouseup', setCursor)
      map.on('mousemove', setCursor)

      // Handle map clicks
      map.on('click', (e) => {
        const { lng, lat } = e.lngLat
        const { getCurrentTargetLocation, unlockLocation, openModal, triggerWrongTapShake } = stateRef.current

        const targetLocation = getCurrentTargetLocation()
        if (!targetLocation) return

        const distance = getDistanceInMeters(
          lat,
          lng,
          targetLocation.lat,
          targetLocation.long
        )

        if (distance <= targetLocation.acceptableDistanceMetres) {
          fireHeartsConfetti()
          unlockLocation(targetLocation.id)
          addMarkerToMap(targetLocation.id)
          openModal(targetLocation, true) // true = fresh unlock
        } else {
          triggerWrongTapShake()
        }
      })

      mapRef.current = map

      return () => {
        map.remove()
        mapRef.current = null
      }
    }
  }, [addMarkerToMap])

  // Create flyTo handler function
  const handleFlyTo = useCallback((location: typeof locationData[0]) => {
    if (!mapRef.current) return

    // Calculate zoom based on acceptableDistanceMetres
    // Smaller radius = higher zoom
    let zoom = 14
    if (location.acceptableDistanceMetres <= 200) zoom = 16
    else if (location.acceptableDistanceMetres <= 500) zoom = 15
    else if (location.acceptableDistanceMetres <= 1000) zoom = 14
    else if (location.acceptableDistanceMetres <= 2000) zoom = 13
    else zoom = 11

    mapRef.current.flyTo({
      center: [location.long, location.lat],
      zoom,
      padding: { left: PANEL_WIDTH, top: 50, bottom: 50, right: 50 },
      duration: 2500,
      essential: true,
    })
  }, [])

  // Handle celebration modal close — fit map to show all markers
  const handleCelebrationClose = useCallback(() => {
    setIsCelebrationOpen(false)
    if (mapRef.current) {
      const bounds = new mapboxgl.LngLatBounds()
      locationData.forEach(loc => bounds.extend([loc.long, loc.lat]))
      mapRef.current.fitBounds(bounds, { padding: 60, duration: 2000 })
    }
  }, [])

  // Register flyTo function
  useEffect(() => {
    registerFlyTo(handleFlyTo)
  }, [registerFlyTo, handleFlyTo])

  // Add markers for already unlocked locations on mount/update
  useEffect(() => {
    unlockedLocations.forEach((locId) => {
      addMarkerToMap(locId)
    })
  }, [unlockedLocations, addMarkerToMap])

  return (
    <>
      <div id="map-container" ref={mapContainerRef} />
      <button
        className="info-button"
        onClick={() => setIsInstructionsOpen(true)}
        aria-label="Open instructions"
      >
        <Info size={20} />
      </button>
      <ClueOverlay isInstructionsOpen={isInstructionsOpen} />
      <LocationModal onCelebrate={() => { closeModal(); setIsCelebrationOpen(true) }} />
      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />
      {isCelebrationOpen && <CelebrationModal onClose={handleCelebrationClose} />}
    </>
  )
}
