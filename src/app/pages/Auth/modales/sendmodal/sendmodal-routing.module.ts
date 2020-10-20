import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendmodalPage } from './sendmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SendmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendmodalPageRoutingModule {}
