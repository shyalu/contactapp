
import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
    'agm-map { height: 600px; }'
  ]
})
export class MapComponent implements OnInit {
  lat = 48.75606;
  lng = -118.859;

  constructor(private mapservice:MapService) { }

  ngOnInit(): void {
    // to get current location
    this.getLocation();

    //to get lat, lan from entered address
    this.mapservice.getLatLan('Noida').subscribe((data)=>
    {
       console.log(data);
    });
  }

  selectedMarker:any = null;

  markers = [
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  selectMarker(event:any) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
        let vt = this.lat;
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
