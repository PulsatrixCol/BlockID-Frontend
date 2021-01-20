import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteCertificatePageRoutingModule } from './vote-certificate-routing.module';

import { VoteCertificatePage } from './vote-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteCertificatePageRoutingModule
  ],
  declarations: [VoteCertificatePage]
})
export class VoteCertificatePageModule {}
