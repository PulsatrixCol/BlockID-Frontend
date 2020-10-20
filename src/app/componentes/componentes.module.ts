import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NuevaIdentidadComponent} from './nueva-identidad/nueva-identidad.component'
import {BilleteraComponent} from './billetera/billetera.component'
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    NuevaIdentidadComponent,
    BilleteraComponent],
  imports: [
    CommonModule,
    QRCodeModule
  ],
  exports: [
    NuevaIdentidadComponent,
    BilleteraComponent
  ]
})
export class ComponentesModule { }
