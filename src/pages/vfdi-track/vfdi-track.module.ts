import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VfdiTrackPage } from './vfdi-track';

@NgModule({
  declarations: [
    VfdiTrackPage,
  ],
  imports: [
    IonicPageModule.forChild(VfdiTrackPage),
  ],
  exports: [
    VfdiTrackPage
  ]
})
export class VfdiTrackPageModule {}
