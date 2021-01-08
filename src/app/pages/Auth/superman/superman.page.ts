import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-superman',
  templateUrl: './superman.page.html',
  styleUrls: ['./superman.page.scss'],
})
export class SupermanPage implements OnInit {
  public pageName: string

  constructor(private navCtrl: NavController, private authService:AuthService) { }

  ngOnInit() {
    this.pageName="Super Administrador"
  }

  createCandidate() {
    this.navCtrl.navigateRoot('create-candidate');
  }

  createEntity(){
    this.navCtrl.navigateRoot('create-entity');
  }

  createElection(){
    this.navCtrl.navigateRoot('create-election');
  }

  logout() {		
    this.authService.logout()
    this.navCtrl.navigateRoot('')
  }

}
