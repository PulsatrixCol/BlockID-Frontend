import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../../../services/blockchain.service';
import {BackendService} from '../../../../services/backend.service';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.page.html',
  styleUrls: ['./create-candidate.page.scss'],
})
export class CreateCandidatePage implements OnInit {
  public nombre: string
  public descrip: string
  public electionID: string
  public pageName: string
  public eleccionesProgramadas: any[]

  constructor(private blockchain:BlockchainService,
              private navCtrl: NavController, 
              private backendService: BackendService) { }

  ngOnInit() {
    this.pageName="Crear Candidato"

    this.backendService.getProgrammedElections().then((res:any[])  => {
      this.eleccionesProgramadas = res['res']
    })

  }

  crearCandidato(){
    this.blockchain.createCandidate(this.nombre,this.descrip,this.electionID);
    this.navCtrl.navigateRoot('superman');
  }
}
