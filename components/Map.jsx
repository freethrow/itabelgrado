
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet'



const Map = ({position}) => {


  

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className=" h-56">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} className=" w-80">
       <Popup>Location</Popup>
    </Marker>
  </MapContainer>
   
  )
}

export default Map