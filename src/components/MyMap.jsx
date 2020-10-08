import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import japanData from './../data/japan.json';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {  }

    componentDidMount() {
        console.log("Generating MyMap Component.")
    }

    countryStyle = {
        fillOpacity: 0.5,
    }
    render() { 
        return (
          <Map center={[33.5, 137]}  zoom={5}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON style={this.countryStyle}data={japanData.features} />
          </Map>
        );
    }
}
 
export default MyMap;