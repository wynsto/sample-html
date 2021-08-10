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


    // const cloudFlareApiKey = '5ac77f8a6325cc98fe0d3703e39e27a1c6b62'

    // fetch('https://api.db-ip.com/v2/free/self').then(function(data) {
    //   const jsonData = data.json()
    //   console.log(jsonData);
    //   return jsonData
    // }).then((jsonData)=> {
      
    //   return jsonData
    // });

  //   fetch('https://www.cloudflare.com/cdn-cgi/trace').then((resp)=> {
  //     return resp
  //   }).then((data)=> {
  //     data = data.body.trim().split('\n').reduce(function(obj, pair) {
  //       pair = pair.split('=');
  //       return obj[pair[0]] = pair[1], obj;
  //     }, {});
  //     console.log(data)
  //   })
  //   fetch('http://ip-api.com/json/')
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       
  //     });

      fetch('https://ipapi.co/json/')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setCenter([myJson.latitude, myJson.longitude])
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
