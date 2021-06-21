import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public tengoLlaves: boolean;

  constructor(
    private blockchain: BlockchainService,
    private navCtrl: NavController,
    ) {
    // Usseless
    this.tengoLlaves = this.blockchain.doWeHaveKeys();
  }

  ngOnInit() {
    // useless
    this.tengoLlaves = this.blockchain.doWeHaveKeys();
    console.log(this.tengoLlaves);
  }

  async changepass(){
    this.navCtrl.navigateForward('cambiarpass');
  }

}
