import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import {AnnonceDataService} from '../service/data/annonce-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Mapboxgl.Map;
  constructor(private announceData: AnnonceDataService, private router: Router) {
  }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxkey;

    this.map = new Mapboxgl.Map({
      container: 'map-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-5.0060804, 34.0421561], // starting position
      zoom: 13 // starting zoom
    });

    const geocoder = new MapboxGeocoder({
      accessToken: Mapboxgl.accessToken, // Set the access token
      placeholder: '     Search announces',
      mapboxgl: Mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
    });
    // this.createMarker(2.2902376, 48.8607012);
    this.createMarker(-5.0060804, 34.0421561);
    this.createMarker(-5.0026453, 34.0416854);
    this.createMarker(-4.9944115, 34.0412253);
    this.createMarker(-5.004016, 34.0351572);



    // Add zoom and rotation controls to the map.
    this.map.addControl(geocoder);
    this.map.addControl(new Mapboxgl.NavigationControl());
    this.map.addControl(new Mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy : true
      },
      trackUserLocation : true
    }));

    this.map.addControl(new MapboxDirections({
      accessToken: Mapboxgl.accessToken
    }),
      'top-left');
  }

  createMarker(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      const coordinates = document.getElementById('coordinates');
      coordinates.style.display = 'block';
      coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }
    /*marker.on('drag', () => {
      console.log(marker.getLngLat());
    });*/
    marker.on('drag', onDragEnd);
  }


}
