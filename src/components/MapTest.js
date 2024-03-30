import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import "leaflet-routing-machine";
import RoutingMachine from './RoutingMachine';

function Map() {
    const defaultIcon = new Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

  return (
    <div>
       
    <MapContainer center={[10.5276, 76.2144]} zoom={13} style={{ height: '400px', width: '100%'}}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
 
    <Marker position={[10.5362, 76.2164]} icon={defaultIcon}>
      <Popup>
       GEC Thrissur,Kerala
      </Popup>
    </Marker>

    <Marker position={[10.544510,76.233521]} icon={defaultIcon}>
      <Popup>
       Cheroor
      </Popup>
    </Marker>

    <Marker position={[10.525050,76.212082]} icon={defaultIcon}>
      <Popup>
       Round
      </Popup>
    </Marker>

    
    

    <RoutingMachine/>
  </MapContainer>

  </div>
  )
}

export default Map