import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {NuevaIdentidadComponent} from '../componentes/nueva-identidad/nueva-identidad.component';
import {BilleteraComponent} from '../componentes/billetera/billetera.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,NuevaIdentidadComponent,BilleteraComponent]
})
export class Tab1PageModule {}
