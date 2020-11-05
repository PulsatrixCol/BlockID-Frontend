import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from '../../../componentes/componentes.module'
import { SendassetsPageRoutingModule } from './sendassets-routing.module';

import { SendassetsPage } from './sendassets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendassetsPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SendassetsPage]
})
export class SendassetsPageModule {}
