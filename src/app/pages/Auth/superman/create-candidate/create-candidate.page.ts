import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../../../services/blockchain.service';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.page.html',
  styleUrls: ['./create-candidate.page.scss'],
})
export class CreateCandidatePage implements OnInit {
  public nombre: string
  public descrip: string
  public pageName: string
  constructor(private blockchain:BlockchainService,private navCtrl: NavController) { }

  ngOnInit() {
    this.pageName="Crear Candidato"
  }

  crearCandidato(){
    this.blockchain.createCandidate(this.nombre,this.descrip);
    this.navCtrl.navigateRoot('superman');
  }
}
