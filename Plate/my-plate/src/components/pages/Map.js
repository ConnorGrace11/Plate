 
import React from 'react' // AIzaSyBNMFYYWax_Ggl3tWZd9d0RfnFJhpLUUzg
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
//reference: https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d


const MapContainer = () => {

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 29.019810,
        lng: -81.303120
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 28.8,
        lng: -80.9
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    }
  ];
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 29.023, lng: -81.303
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBNMFYYWax_Ggl3tWZd9d0RfnFJhpLUUzg'>
       <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
        </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;