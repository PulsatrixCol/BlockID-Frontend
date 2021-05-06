import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NuevaIdentidadComponent} from './nueva-identidad/nueva-identidad.component'
import {BilleteraComponent} from './billetera/billetera.component'
import {SendComponent} from './billetera/send/send.component'
import {HeaderComponent} from './header/header.component'
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';
import { CastVoteComponent } from './cast-vote/cast-vote.component';
import {VoteCertificateComponent } from './vote-certificate/vote-certificate.component';
import {ResultsComponent} from './results/results.component'
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChangepassComponent } from './changepass/changepass.component';




@NgModule({
  declarations: [
    NuevaIdentidadComponent,
    BilleteraComponent,
    SendComponent,
    HeaderComponent,
    ListaElementosComponent,
    CastVoteComponent,
    VoteCertificateComponent,
    ResultsComponent,
    ChangepassComponent],
  imports: [
    CommonModule,
    QRCodeModule,
    IonicModule,
    FormsModule,
    NgApexchartsModule
  ],
  exports: [
    NuevaIdentidadComponent,
    BilleteraComponent,
    SendComponent,
    HeaderComponent,
    ListaElementosComponent,
    CastVoteComponent,
    VoteCertificateComponent,
    ResultsComponent,
    ChangepassComponent

  ]
})
export class ComponentesModule { }
