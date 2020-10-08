import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as ginzafarmData from "./data/ginzafarm.json";
import * as attraclabData from "./data/attraclab.json";
import './App.css';

function App() {
  const [activeGinzafarm, setActiveGinzafarm] = React.useState(null);
  const [activeAttraclab, setActiveAttraclab] = React.useState(null);
  const ginzafarmMarker = new Icon({
    iconUrl: "/ginzafarm.png",
    iconSize: [35, 35],
  });
  const attraclabMarker = new Icon({
    iconUrl: "/attraclab.png",
    iconSize: [35, 35],
  })

  return (
    <Map center={[35.75, 139.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {ginzafarmData.markers.map((ginzafarm) => (
        <Marker
          key={ginzafarm.name}
          position={[ginzafarm.coordinates[0], ginzafarm.coordinates[1]]}
          onClick={() => {
            setActiveGinzafarm(ginzafarm);
          }}
          icon={ginzafarmMarker}
        />
      ))}
      {activeGinzafarm && (
        <Popup
          position={[
            activeGinzafarm.coordinates[0],
            activeGinzafarm.coordinates[1],
          ]}
          onClose={() => {
            setActiveGinzafarm(null);
          }}
        >
          <div>
            <h2>{activeGinzafarm.name}</h2>
            <p>{activeGinzafarm.address}</p>
          </div>
        </Popup>
      )}
      {attraclabData.markers.map((attraclab) => (
        <Marker
          key={attraclab.name}
          position={[attraclab.coordinates[0], attraclab.coordinates[1]]}
          onClick={() => {
            setActiveAttraclab(attraclab);
          }}
          icon={attraclabMarker}
        />
      ))}
      {activeAttraclab && (
        <Popup
          position={[
            activeAttraclab.coordinates[0],
            activeAttraclab.coordinates[1],
          ]}
          onClose={() => {
            setActiveAttraclab(null);
          }}
        >
          <div>
            <h2>{activeAttraclab.name}</h2>
            <p>{activeAttraclab.address}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default App;
