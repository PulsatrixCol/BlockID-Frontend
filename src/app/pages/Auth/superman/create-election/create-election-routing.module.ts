import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateElectionPage } from './create-election.page';

const routes: Routes = [
  {
    path: '',
    component: CreateElectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateElectionPageRoutingModule {}
