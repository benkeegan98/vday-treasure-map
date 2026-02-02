
import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'


import 'mapbox-gl/dist/mapbox-gl.css';

import '../../App.css'

export const MapScreen = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [-74.0060152, 40.7127281],
        zoom: 5,
        maxZoom: 15,
      });

      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      // Add your custom markers and lines here

      // Clean up on unmount
      return () => map.remove();
    }

  }, [])

  return (
    <div id='map-container' ref={mapContainerRef} />
  )
}