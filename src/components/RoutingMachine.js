import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import React from "react";
import { Icon } from 'leaflet';

const createRoutineMachineLayer = (props) => {
  const defaultIcon = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const markerOptions = {
    icon: defaultIcon,
    draggable: true,
    bounceOnAdd: false,
    bounceOnAddOptions: {
      duration: 1000,
      height: 800,
    },
    popupAnchor: [0, -40] 
  };

  const waypoints = [
    L.latLng(10.5276, 76.2144),
    L.latLng(10.544510, 76.233521),
    L.latLng(10.525050, 76.212082)
  ];

  const markers = waypoints.map((latLng, index) => {
    const marker = L.marker(latLng, markerOptions);
    marker.bindPopup(`Marker ${index + 1}`).openPopup();
    return marker;
  });

  const instance = L.Routing.control({
    waypoints: waypoints,
    routeWhileDragging: true,
    lineOptions: {
      styles: [{ color: 'green', opacity: 1, weight: 5 }]
    },
    createMarker: function (i, waypoint, n) {
      return markers[i];
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
