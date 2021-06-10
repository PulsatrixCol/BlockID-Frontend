import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaDatosPageRoutingModule } from './politica-datos-routing.module';

import { PoliticaDatosPage } from './politica-datos.page';
import { ComponentesModule } from './../../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaDatosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PoliticaDatosPage]
})
export class PoliticaDatosPageModule {}
