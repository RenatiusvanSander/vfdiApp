import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import the VfdiTrack Interface
import { VfdiTrack } from '../../models/vfdi-track';
/*
  Generated class for the VfdiTracksProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class VfdiTracksProvider {
  // vfdi Tracklist Urö at API
  vfdiTracksLoadUrl = 'http://localhost:3000/api/vfdi/vfdi/all';

  constructor(public http: Http) {
    // console.log('Hello VfdiTracksProvider Provider');
  }

  // load the Vfdi-Tracks from API
  loadVfdiTracks(): Observable<VfdiTrack[]>{
    return this
    .http
    .get(this.vfdiTracksLoadUrl)
    .map(result => <VfdiTrack[]>result.json());
  }

}
