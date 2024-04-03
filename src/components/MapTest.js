import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import Axios from 'axios';
import RoutingMachine from './RoutingMachine';

function Map() {
    const [markers, setMarkers] = useState([]);

    const defaultIcon = new Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Axios.get('http://127.0.0.1:8000/getbusdetailseve')
            .then(response => {
                const data = response.data.data;
                const newMarkers = data.map(bus => ({
                    position: [bus.school_pt.latitude, bus.school_pt.longitude],
                    name: 'School: GEC Thrissur, Kerala'
                })).concat(data.flatMap(bus => (
                    bus.stops.map(stop => ({
                        position: [stop.pt.latitude, stop.pt.longitude],
                        name: stop.name
                    }))
                )));
                setMarkers(newMarkers);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    
    return (
        <div>
          <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
            <MapContainer center={[10.5276, 76.2144]}  zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position} icon={defaultIcon}>
                        <Popup>{marker.name}</Popup>
                    </Marker>
                ))}
            
                <RoutingMachine/>
            </MapContainer>
        </div>
    );
}

export default Map;
