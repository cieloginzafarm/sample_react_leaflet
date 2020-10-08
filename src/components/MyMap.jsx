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
        weight: 2,
    };

    onEachPrefecture = (prefecture, layer) => {
      const prefectureName = prefecture.properties.prefectures_name;
      console.log(prefectureName);
      layer.bindPopup(prefectureName);
      layer.on({
        click: (event) => {
          event.target.setStyle({
            color: "green"
          })
        }
      })
    };

    render() { 
        return (
          <Map center={[33.5, 137]} zoom={5}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON style={this.countryStyle} data={japanData.features} onEachFeature={this.onEachPrefecture}/>
          </Map>
        );
    }
}
 
export default MyMap;