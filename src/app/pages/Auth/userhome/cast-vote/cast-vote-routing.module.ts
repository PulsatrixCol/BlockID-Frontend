import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastVotePage } from './cast-vote.page';

const routes: Routes = [
  {
    path: '',
    component: CastVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastVotePageRoutingModule {}
