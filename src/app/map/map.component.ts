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
l:number;
lo:number;
 map : MapsModel[]=[

   new class implements MapsModel {
   latitude: number=29.1003444;
   longitude=  -5.621339;
 },
   new class implements MapsModel {
     latitude: number=30.903444;
     longitude=  -6.621339;

   },new class implements MapsModel {
     latitude: number=45.1896191;
     longitude= 5.7302334;
   }]
  onchoselocation(event){
   console.log(event);
   this.l=event.coords.lat;
   this.lo=event.coords.lng;
}
  constructor() {

  }

  ngOnInit(): void {
  }

}
