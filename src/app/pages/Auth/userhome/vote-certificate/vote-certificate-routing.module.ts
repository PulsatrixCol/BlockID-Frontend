import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteCertificatePage } from './vote-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: VoteCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteCertificatePageRoutingModule {}
