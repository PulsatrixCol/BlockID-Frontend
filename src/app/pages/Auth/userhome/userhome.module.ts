import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserhomePageRoutingModule } from './userhome-routing.module';

import { UserhomePage } from './userhome.page';

import { ComponentesModule } from '../../../componentes/componentes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserhomePageRoutingModule,
    ComponentesModule
  ],
  declarations: [UserhomePage]
})
export class UserhomePageModule {}
