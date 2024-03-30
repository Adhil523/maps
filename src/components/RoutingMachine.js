import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import React from "react";
import { Marker } from "react-leaflet";
import {Icon} from 'leaflet'

const createRoutineMachineLayer = (props) => {
  const defaultIcon = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(10.026617, 76.308411),
      L.latLng(10.3070, 76.3341),
      L.latLng(10.5276, 76.2144)
    ],
    marker: [
      L.marker([10.026617, 76.308411]),{icon:defaultIcon},
      L.marker([10.5276, 76.2144]),{icon:defaultIcon}
    ]
    
    
    
  });
  
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;