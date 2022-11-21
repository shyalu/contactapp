import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { Injectable, NgZone } from '@angular/core';
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class MapService extends GoogleMapsAPIWrapper {
  geocoder: Promise<any>;
  constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
    super(__loader, __zone);
    this.geocoder = this.__loader.load().then(() => new google.maps.Geocoder());
  }

  getLatLan(address: string): Observable<any> {
    return Observable.create((observer:any) => {
      this.geocoder.then((geocoder) => {
        geocoder.geocode({ 'address': address }, (results:any, status:any) => {
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results[0].geometry.location);
            observer.complete();
          } else {
            console.error('Error - ', results, ' & Status - ', status);
            observer.next({});
            observer.complete();
          }
        });
      });
    });
}
}
