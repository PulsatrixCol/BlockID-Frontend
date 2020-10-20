import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { SendmodalPageRoutingModule } from './sendmodal-routing.module';

import { SendmodalPage } from './sendmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmodalPageRoutingModule
  ],
  declarations: [SendmodalPage]
})
export class SendmodalPageModule {
  constructor(public modalController: ModalController){

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SendmodalPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
