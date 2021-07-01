import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-superman',
  templateUrl: './superman.page.html',
  styleUrls: ['./superman.page.scss'],
})
export class SupermanPage implements OnInit {
  public pageName: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private blockchainService: BlockchainService) { }

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
  feedWallets(){
    this.blockchainService.feedWallets();
  }

  logout() {		
    this.authService.logout()
    this.navCtrl.navigateRoot('')
  }

}
