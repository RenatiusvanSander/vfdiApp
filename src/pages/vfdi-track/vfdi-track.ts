import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VfdiTrack } from '../../models/vfdi-track';
import { Http } from '@angular/http';

/**
 * Generated class for the VfdiTrackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vfdi-track',
  templateUrl: 'vfdi-track.html',
})
export class VfdiTrackPage {
  vfditrack: VfdiTrack;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  )
  {
    this.vfditrack = navParams.get('track');
  }

  downloadTrack(downloadUri: string) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VfdiTrackPage');
  }

}
