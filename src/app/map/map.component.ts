import { Component, OnInit } from '@angular/core';
import {MapsModel} from "../model.ts/maps-model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 lat: number=30.1003444;
  long:number=-5.621339;
  zoom:number= 6;

 map : MapsModel[]=[

   new class implements MapsModel {
   latitude: number=29.1003444;
   longitude=  -5.621339;
  /* zoom:number= 4;*/
 },
   new class implements MapsModel {
     latitude: number=30.903444;
     longitude=  -5.621339;
    /* zoom:number= 8;*/
   }]

  constructor() {

  }

  ngOnInit(): void {
  }

}
