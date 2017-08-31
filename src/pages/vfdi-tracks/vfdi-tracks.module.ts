import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VfdiTracksPage } from './vfdi-tracks';

@NgModule({
  declarations: [
    VfdiTracksPage,
  ],
  imports: [
    IonicPageModule.forChild(VfdiTracksPage),
  ],
  exports: [
    VfdiTracksPage
  ]
})
export class VfdiTracksPageModule {}
