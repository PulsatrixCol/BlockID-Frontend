import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//import {NgxMaskIonicModule} from 'ngx-mask-ionic'
import { FormsModule } from '@angular/forms';

//import { NativeAudio } from '@ionic-native/native-audio/ngx';
//import { ChartsModule } from './charts/charts.module';
//import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
//import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [    
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    //ChartsModule,
    //NgxMaskIonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    
    //NgxDaterangepickerMd.forRoot(),
    //NgxGoogleAnalyticsModule.forRoot('G-QVY22JDDSX'),
    //NgxGoogleAnalyticsRouterModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //BarcodeScanner,
    //NativeAudio
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
