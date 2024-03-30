import React from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import "leaflet-routing-machine";
import RoutingMachine from './RoutingMachine';
// import { Routing } from 'react-leaflet-routing-machine';

const MapTest = () => {

  const defaultIcon = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div>
        <MapContainer style={{height:"400px",width:"100%"}} center={[10.5276, 76.2144]} zoom={17} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[10.5276, 76.2144]} icon={defaultIcon}>
      <Popup>
       Thrissur,Kerala
      </Popup>
    </Marker>
    <Marker position={[10.026617, 76.308411]} icon={defaultIcon}>
      <Popup>
       Thrissur,Kerala
      </Popup>
    </Marker>
    <RoutingMachine/>
  
</MapContainer>
    </div>
  )
}

export default MapTest