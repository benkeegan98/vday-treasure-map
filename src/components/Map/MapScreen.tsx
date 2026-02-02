import { useRef, useEffect, useCallback, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { Info } from 'lucide-react'

import 'mapbox-gl/dist/mapbox-gl.css'

import '../../App.css'
import { ClueOverlay } from '../ClueOverlay/ClueOverlay'
import { LocationModal } from '../LocationModal/LocationModal'
import { InstructionsModal } from '../InstructionsModal/InstructionsModal'
import { useMapState } from '../../context/MapStateContext'
import { locationData } from '../../locations/locationData'
import { getDistanceInMeters } from '../../utils/distance'
import { fireHeartsConfetti } from '../../utils/confetti'

export const MapScreen = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<Map<number, mapboxgl.Marker>>(new Map())
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(true)

  const {
    unlockedLocations,
    unlockLocation,
    openModal,
    getCurrentTargetLocation,
    triggerWrongTapShake,
  } = useMapState()

  // Use refs to avoid stale closures in map event handlers
  const stateRef = useRef({ getCurrentTargetLocation, unlockLocation, openModal, triggerWrongTapShake })
  stateRef.current = { getCurrentTargetLocation, unlockLocation, openModal, triggerWrongTapShake }

  // Add a marker to the map for an unlocked location
  const addMarkerToMap = useCallback((locationId: number) => {
    if (!mapRef.current || markersRef.current.has(locationId)) return

    const location = locationData.find((loc) => loc.id === locationId)
    if (!location) return

    // Create custom marker element
    const el = document.createElement('div')
    el.className = 'unlocked-marker'
    el.innerHTML = '📍'
    el.style.fontSize = '32px'
    el.style.cursor = 'pointer'

    const marker = new mapboxgl.Marker({ element: el })
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
      <ClueOverlay />
      <LocationModal />
      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />
    </>
  )
}
