import { Component, OnInit, Input } from '@angular/core'
import {NewkeypairService} from '../../services/newkeypair.service'
import {BlockchainService} from '../../services/blockchain.service'
import { NavController} from '@ionic/angular'




@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.scss'],
})
export class BilleteraComponent implements OnInit {
  public nombre: string
  public address: string
  public username: string
  public balance:  {}
  public tengoLlaves=true

  constructor(private newkeypair:NewkeypairService,
              private blockchain:BlockchainService,
              private navCtrl: NavController,
              ) { 
    this.tengoLlaves = this.blockchain.doWeHaveKeys()
    this.nombre = localStorage.getItem('nombre')
    this.address = localStorage.getItem('address')
    //console.log(this.address)
    this.username = localStorage.getItem('username')
   }

  private async balanceBootstrap() {
    if(this.address != 'null'){
      this.balance =  await this.blockchain.getBalance(this.address)
      //console.log(this.balance)
    }
  }

  public async send(){
    this.navCtrl.navigateRoot('sendassets');
  }

  public refreshBalance(){
    this.balanceBootstrap()
  }

  ngOnInit() {
    this.balanceBootstrap()
  }

}
