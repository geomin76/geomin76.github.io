import React from "react"
import GoogleMapReact from "google-map-react"

import "../utils/css/screen.css"

const GoogleMaps = ({ latitude, longitude }) => {
  async function getData() {
    const response = await fetch(process.env.GATSBY_QUERY_URL, {
      method: "GET",
      mode: "cors",
    })
    return response.json()
  }

  const renderMarkers = (map, maps) => {
    getData().then(data => {
      data.map(x => {
        let marker = new maps.Marker({
          position: { lat: parseFloat(x.lat), lng: parseFloat(x.lng) },
          map,
        })
      })
    })
  }

  return (
    <div
      class="google-maps-transition"
      style={{ height: "100vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_API_KEY }}
        defaultCenter={{ lat: 40.757, lng: -73.99 }}
        defaultZoom={1}
        options={{ gestureHandling: "greedy" }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  )
}

export default GoogleMaps
