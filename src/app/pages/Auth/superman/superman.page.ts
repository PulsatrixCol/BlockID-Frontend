import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-superman',
  templateUrl: './superman.page.html',
  styleUrls: ['./superman.page.scss'],
})
export class SupermanPage implements OnInit {
  public pageName: string

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.pageName="Super Administrador"
  }

  createCandidate() {
    this.navCtrl.navigateRoot('create-candidate');
  }

  createEntity(){
    this.navCtrl.navigateRoot('create-entity');
  }
}
