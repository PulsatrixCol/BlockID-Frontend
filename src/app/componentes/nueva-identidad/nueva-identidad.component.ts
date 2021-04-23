import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { NewkeypairService } from '../../services/newkeypair.service';

@Component({
  selector: 'app-nueva-identidad',
  templateUrl: './nueva-identidad.component.html',
  styleUrls: ['./nueva-identidad.component.scss'],
})
export class NuevaIdentidadComponent implements OnInit {
  tengoLlaves = false; // boolean;
  @Input() llave: string;
  @Input() pubkey: string;

  constructor(
    private newkeypair: NewkeypairService,
    private navCtrl: NavController,
    private blockchain: BlockchainService
  ) {
  }

  ngOnInit() {
    this.tengoLlaves = this.blockchain.doWeHaveKeys();
   }

  newKeys() {
    if (!this.blockchain.doWeHaveKeys()) {
      this.newkeypair.newkeypair(localStorage.getItem('userId')).then((res) => {
        this.llave = res['address'];
        this.tengoLlaves = true;
        this.pubkey = localStorage.getItem('pubkey');
        // this.navCtrl.navigateRoot('tabs');
        window.location.reload();
      });
    }else{
      this.navCtrl.navigateRoot('tabs');
    }
  }
}
