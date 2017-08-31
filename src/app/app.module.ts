import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VfdiTracksProvider } from '../providers/vfdi-tracks/vfdi-tracks';
import { HttpModule } from '@angular/http';

import { LoginPage } from '../pages/login/login';
import { VfdiTracksPage } from '../pages/vfdi-tracks/vfdi-tracks';
import { VfdiTrackPage } from '../pages/vfdi-track/vfdi-track';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { RegisterPage } from '../pages/register/register';
import { LogoutPage } from '../pages/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    VfdiTracksPage,
    VfdiTrackPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    VfdiTracksPage,
    VfdiTrackPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VfdiTracksProvider
  ]
})
export class AppModule {}
