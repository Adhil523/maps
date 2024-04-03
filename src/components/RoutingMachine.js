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
    L.latLng(10.543975, 76.221360),
    L.latLng(10.534904, 76.219701),
    L.latLng(10.522813,76.226204),
    L.latLng(10.517719, 76.23618),
    L.latLng(10.514859, 76.241808)
  ];

  const markers = waypoints.map((latLng, index) => {
    const marker = L.marker(latLng, markerOptions);
    marker.bindPopup(`Marker ${index + 1}`).openPopup();
    return marker;
  });

  const instance = L.Routing.control({
    show: false,
    waypoints: waypoints,
    routeWhileDragging: false,
    lineOptions: {
      styles: [{ color: 'green', opacity: 1, weight: 5 }]
    },
    createMarker: function (i, waypoint, n) {
      return markers[i];
    }
    
  });

  const getDistance = (point1, point2) => {
    return point1.distanceTo(point2) / 1000; // Return distance in kilometers
  };

  // Method to calculate distance between each pair of consecutive waypoints
  const calculateDistanceBetweenWaypoints = () => {
    let totalDistance = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
      const startPoint = waypoints[i];
      const endPoint = waypoints[i + 1];
      const distance = getDistance(startPoint, endPoint);
      totalDistance += distance;
      console.log(`Distance between waypoint ${i + 1} and waypoint ${i + 2}: ${distance} km`);
    }
    console.log(`Total distance: ${totalDistance} km`);
  };

  // Call calculateDistanceBetweenWaypoints method
  calculateDistanceBetweenWaypoints();
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
