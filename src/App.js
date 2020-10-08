import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as ginzafarmData from "./data/ginzafarm.json";
import './App.css';

function App() {
  const [activeGinzafarm, setActiveGinzafarm] = React.useState(null);
  const marker = new Icon({
    iconUrl: "/ginzafarm.png",
    iconSize: [35, 35],
  });

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
          icon={marker}
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
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default App;
