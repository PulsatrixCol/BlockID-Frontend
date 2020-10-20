import { Component, OnInit, Input } from '@angular/core'
import {NewkeypairService} from '../../services/newkeypair.service'
import {BlockchainService} from '../../services/blockchain.service'
import { NavController} from '@ionic/angular'
import { SendmodalPageModule  } from '../../pages/Auth/modales/sendmodal/sendmodal.module'



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
  public tengoLlaves=false

  constructor(private newkeypair:NewkeypairService,
              private blockchain:BlockchainService,
              private navCtrl: NavController,
              public modal: SendmodalPageModule) { 
    this.tengoLlaves = this.blockchain.doWeHaveKeys()
    this.nombre = localStorage.getItem('nombre')
    this.address = localStorage.getItem('address')
    this.username = localStorage.getItem('username')
    this.balanceBootstrap()
   }

  private async balanceBootstrap() {
    if(this.address != null){
      this.balance =  await this.blockchain.getBalance(this.address)
      console.log(this.balance)
    }
  }

  public async send(){
    this.modal.presentModal()
    //this.navCtrl.navigateRoot('sendmodal');
  }
  ngOnInit() {}

}
