import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import {BlockchainService} from '../../services/blockchain.service';
import { AlertController, LoadingController } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {VoteCertificateComponent} from '../vote-certificate/vote-certificate.component';
import { tokenName } from '../../../environments/environment';


@Component({
  selector: 'app-cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrls: ['./cast-vote.component.scss'],
})
export class CastVoteComponent implements OnInit {
  @Input() electionId: string;
  candidates: any;
  txid: any;

  constructor(private backendService: BackendService, 
              private blockchainService: BlockchainService,
              private alertController: AlertController,
              private navCtrl: NavController,
              public modalController: ModalController,
              public loadingController: LoadingController){ }

  ngOnInit() {
    //console.log(this.electionId)
    this.loadCandidates();

  }

  async vote(candidate: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirma tu voto',
      message: 'Confirmar voto por:  <strong>'+candidate.Nombre+'</strong>',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
           // console.log('Confirm Cancel:');
          }
        }, {
          text: 'CONFIRMAR',
          handler: () => {
            //console.log('Confirm Okay');
            this.castVote(candidate.id);
          }
        }
      ]
    });

    await alert.present();
  }

  private castVote(candidateId){
    this.backendService.getCandidateAddress(candidateId).then((res: any[])  => {
      const wallet = res['blockid'];
      this.blockchainService.sendRaw(wallet.blockid,1,tokenName).then(data => {
        this.txid = data;
        //const idtx = JSON.parse(String(data))
        //console.log(data)
        this.backendService.registrarVoto(
          localStorage.getItem('departamento'),
          localStorage.getItem('ciudad'),
          this.electionId.replace(/['"]+/g, ''),
          this.txid.txid
        );
        this.openModal(data);});
    });
  }


  async openModal(data: any) {
    const modal = await this.modalController.create({
    component: VoteCertificateComponent,
    componentProps: { txid: data.txid}
    });
    return await modal.present();
   }

   async loadCandidates() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espere',
      backdropDismiss: true,
      spinner: 'crescent',
      translucent: true,
    });
    await loading.present();
    this.backendService.getCandidates(this.electionId).then((res: any[])  => {
      this.candidates = res['cands'];
      loading.dismiss();
    });
  }
}
