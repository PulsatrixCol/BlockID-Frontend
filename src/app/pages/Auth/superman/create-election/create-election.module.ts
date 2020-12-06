import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateElectionPageRoutingModule } from './create-election-routing.module';

import { CreateElectionPage } from './create-election.page';
import { ComponentesModule } from '../../../../componentes/componentes.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateElectionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CreateElectionPage]
})
export class CreateElectionPageModule {}

