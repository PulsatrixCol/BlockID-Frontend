import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaDatosPageRoutingModule } from './politica-datos-routing.module';

import { PoliticaDatosPage } from './politica-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaDatosPageRoutingModule
  ],
  declarations: [PoliticaDatosPage]
})
export class PoliticaDatosPageModule {}
