import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import {BlockchainService} from '../../services/blockchain.service'
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { VoteCertificatePageModule } from 'src/app/pages/Auth/userhome/vote-certificate/vote-certificate.module';

@Component({
  selector: 'app-cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrls: ['./cast-vote.component.scss'],
})
export class CastVoteComponent implements OnInit {
  @Input() electionId: string
  candidates: any
  txid: any

  constructor(private backendService: BackendService, 
              private blockchainService: BlockchainService,
              private alertController: AlertController,
              private navCtrl: NavController,
              public modalController: ModalController){ }

  ngOnInit() {
    //console.log(this.electionId)
    this.backendService.getCandidates(this.electionId).then((res:any[])  => {
      this.candidates = res['cands']
      //console.log(this.candidates)
    })
  }

  async vote(candidate: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Confirmar voto por:  <strong>'+candidate.Nombre+'</strong>',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel:')
          }
        }, {
          text: 'CONFIRMAR',
          handler: () => {
            console.log('Confirm Okay')
            this.castVote(candidate.id)
            
          }
        }
      ]
    });

    await alert.present();
  }

  private castVote(candidateId){
    this.backendService.getCandidateAddress(candidateId).then((res:any[])  => {
      let wallet = res['blockid']
      this.blockchainService.sendRaw(wallet.blockid,1,"\"\"").then(data => {this.txid = data})
    })
  }


  async openModal(data: any) {
    const modal = await this.modalController.create({
    component: VoteCertificatePageModule,
    componentProps: { txid: data}
    });
    return await modal.present();
   }
}
