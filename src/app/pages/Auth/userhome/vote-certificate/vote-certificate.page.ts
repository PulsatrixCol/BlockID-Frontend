import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vote-certificate',
  templateUrl: './vote-certificate.page.html',
  styleUrls: ['./vote-certificate.page.scss'],
})
export class VoteCertificatePage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
    }

}
