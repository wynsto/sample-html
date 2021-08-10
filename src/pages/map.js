import * as React from "react"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// styles
const pageStyles = {
  color: "#232129",
  padding: "0",
  margin: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const mapInitialStyles = {
  height: "100vh",
  width: "100vw",
}

// markup
const NotFoundPage = () => {
  
  const [mapStyles, setMapStyles] = React.useState(mapInitialStyles)
  const [center, setCenter] = React.useState(null)
  
  React.useEffect(() => {
    if(center) {
      return
    }
    fetch('http://ip-api.com/json/')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setCenter([myJson.lat, myJson.lon])
      });
  })

  return (
    <main style={pageStyles}>
      {
        typeof window !== 'undefined' && MapContainer && center &&
      <MapContainer style={mapStyles} center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[22.302711, 114.177216]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      }
    </main>
  )
}

export default NotFoundPage
