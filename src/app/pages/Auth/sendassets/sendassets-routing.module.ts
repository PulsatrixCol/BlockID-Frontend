import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendassetsPage } from './sendassets.page';

const routes: Routes = [
  {
    path: '',
    component: SendassetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendassetsPageRoutingModule {}
