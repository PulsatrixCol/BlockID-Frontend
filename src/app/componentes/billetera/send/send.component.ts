import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service'

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent implements OnInit {
  public nombre: string
  public address: string
  public username: string
  public balance:  {}
  public tengoLlaves=false

  constructor(private blockchain:BlockchainService) {
    this.balanceBootstrap();
    
   }

   private async balanceBootstrap() {
    if(this.address != null){
      this.balance =  await this.blockchain.getBalance(this.address)
      console.log(this.balance)
    }
  }

  ngOnInit() {}

}
