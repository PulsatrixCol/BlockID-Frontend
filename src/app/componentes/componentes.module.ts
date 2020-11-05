import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NuevaIdentidadComponent} from './nueva-identidad/nueva-identidad.component'
import {BilleteraComponent} from './billetera/billetera.component'
import {SendComponent} from './billetera/send/send.component'
import {HeaderComponent} from './header/header.component'
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NuevaIdentidadComponent,
    BilleteraComponent,
    SendComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    QRCodeModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    NuevaIdentidadComponent,
    BilleteraComponent,
    SendComponent,
    HeaderComponent
  ]
})
export class ComponentesModule { }
