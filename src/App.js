import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
import * as hotelData from "./data/dubai-hotels.json";
import './App.css';

function App() {
  const [ activeHotel, setActiveHotel ] = React.useState(null);

  return (
    <Map center={[25, 55]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {hotelData.markers.map((hotel) => (
        <Marker
          key={hotel.name}
          position={[hotel.position[0], hotel.position[1]]}
          onClick={() => {
            setActiveHotel(hotel);
          }}
        />
      ))}
      {activeHotel && (
        <Popup
          position={[
            activeHotel.position[0],
            activeHotel.position[1],
          ]}
          onClose={() => {
            setActiveHotel(null);
          }}
        >
          <div>
            <h2>{activeHotel.name}</h2>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default App;
