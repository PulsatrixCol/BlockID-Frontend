import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaDatosPage } from './politica-datos.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticaDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticaDatosPageRoutingModule {}
