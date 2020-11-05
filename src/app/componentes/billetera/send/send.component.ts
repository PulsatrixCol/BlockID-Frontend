import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent implements OnInit {
  public destino: string
  public address: string
  public assetType: string
  public privkey: string
  public balance: any
  public qty: string

  constructor(private blockchain:BlockchainService,
    private navCtrl: NavController) {
    
    
   }

   private async balanceBootstrap() {
    if(this.address != null){
      this.balance =  await this.blockchain.getBalance(this.address)
      //console.log(this.balance)
    }
  }

  ngOnInit() {
    this.address = localStorage.getItem('address')
    this.balanceBootstrap();
  }

  sendAsset()
  {
    //Cheat para poder enviar moneda nativa
    if(this.assetType == undefined){
      this.assetType="\"\""
    }
    this.blockchain.sendRaw(this.destino,parseFloat(this.qty),this.assetType)
    this.navCtrl.navigateRoot('tabs');
  }
  
}
