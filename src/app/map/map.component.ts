import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Mapboxgl.Map;

  constructor() {
  }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxkey;

    this.map = new Mapboxgl.Map({
      container: 'map-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.2902376, 48.8607012], // starting position
      zoom: 13 // starting zoom
    });

    this.createMarker(2.2902376, 48.8607012);

    // Add zoom and rotation controls to the map.
    this.map.addControl(new Mapboxgl.NavigationControl());

  }

  createMarker(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.map);

    marker.on('drag', () => {
      console.log(marker.getLngLat() );
    });
  }
}
