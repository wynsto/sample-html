import * as React from "react"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { BingLayer } from 'react-leaflet-bing-v2'

import L from 'leaflet';
if (L) {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
  });
}

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
const MapPage = () => {
  
  const [mapStyles, setMapStyles] = React.useState(mapInitialStyles)
  const [center, setCenter] = React.useState(null)
  const [text, setText] = React.useState('')
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
          setText(myJson.city + ' ' + myJson.region + '' + myJson.country_name + ' ' + myJson.org)
        });
  })

  return (
    <main style={pageStyles}>
      {
        typeof window !== 'undefined' && MapContainer && center &&
      <MapContainer style={mapStyles} center={center} zoom={10} scrollWheelZoom={true}>
        <BingLayer bingkey="Am7D2syhNLibITjOzf1yxOwVeqr9juVysjL1M5J9q1igpLtOkqP8Oo1kvSawlNcM"></BingLayer>
        <Marker position={center}>
          <Popup>
            {text}
          </Popup>
        </Marker>
      </MapContainer>
      }
    </main>
  )
}

export default MapPage
