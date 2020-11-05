import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-superman',
  templateUrl: './superman.page.html',
  styleUrls: ['./superman.page.scss'],
})
export class SupermanPage implements OnInit {


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  createCandidate() {
    this.navCtrl.navigateRoot('create-candidate');
  }

}
