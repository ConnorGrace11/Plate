
import React from 'react' // AIzaSyBNMFYYWax_Ggl3tWZd9d0RfnFJhpLUUzg
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//reference: https://www.npmjs.com/package/@react-google-maps/api

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 29.023,
  lng: -81.303
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBNMFYYWax_Ggl3tWZd9d0RfnFJhpLUUzg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <div class="justify-content-center">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={center}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}
export default React.memo(MyComponent)