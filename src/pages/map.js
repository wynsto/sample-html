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
  
  React.useEffect(() => {

  })

  return (
    <main style={pageStyles}>
      {
        typeof window !== 'undefined' && MapContainer &&
      <MapContainer style={mapStyles} center={[22.302711, 114.177216]} zoom={13} scrollWheelZoom={true}>
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
