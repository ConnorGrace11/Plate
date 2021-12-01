import { Link} from "react-router-dom"; 
import React, {useState} from 'react' // AIzaSyBNMFYYWax_Ggl3tWZd9d0RfnFJhpLUUzg
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
//reference: https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d


const MapContainer = () => {

  const locations = [
    {
      name: "Wendy's",
      address: "1490 N Woodland Blvd, DeLand, FL 32720",
      url:"/restaurants/6179c52b1e4a49345028acc6",
      location: { 
        lat: 29.054540,
        lng: -81.304740
      },
    },
    {
      name: "Santorini Greek Cuisine",
      address: "136 N Woodland Blvd, DeLand, FL 32720",
      url:"/restaurants/619ee097f5d5d204c8e64f9a",
      location: { 
        lat: 29.029490,
        lng: -81.303688
      },
    },
    {
      name: "Firehouse Subs",
      address: "136 N Woodland Blvd, DeLand, FL 32720",
      url:"/restaurants/61a3ddd78c4fed19ddb91623",
      location: { 
        lat: 29.039400,
        lng: -81.303210
      },
    },
    {
      name: "Positano Trattoria Pizzeria",
      address: "204 N Woodland Blvd, DeLand, FL 32720",
      url:"/restaurants/6167505637f5210835c48572",
      location: { 
        lat: 29.032090,
        lng: -81.303510
      },
    }
  ];

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 29.023, lng: -81.303
  }

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
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
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p><Link to={selected.url}>{selected.name}</Link>  <br></br>{selected.address}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;