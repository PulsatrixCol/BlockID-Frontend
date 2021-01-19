import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastVotePageRoutingModule } from './cast-vote-routing.module';

import { CastVotePage } from './cast-vote.page';
import {ComponentesModule} from '../../../../componentes/componentes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastVotePageRoutingModule,
    ComponentesModule
  ],
  declarations: [CastVotePage]
})
export class CastVotePageModule {}
