import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VfdiTrack } from '../../models/vfdi-track';
import { VfdiTracksProvider } from '../../providers/vfdi-tracks/vfdi-tracks';
import { VfdiTrackPage } from '../vfdi-track/vfdi-track';
/**
 * Generated class for the VfdiTracksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vfdi-tracks',
  templateUrl: 'vfdi-tracks.html',
})
export class VfdiTracksPage {
  vfdiTracks: VfdiTrack[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private vfdiTracksList: VfdiTracksProvider) {
    vfdiTracksList
    .loadVfdiTracks()
    .subscribe(vfdiTracksList => {
      this.vfdiTracks = vfdiTracksList;
    });
  }

    // load the vfdi-track details
    goToVfdiTrack(track: VfdiTrack) {
      this.navCtrl.push(VfdiTrackPage, {track});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VfdiTracksPage');
  }

}
