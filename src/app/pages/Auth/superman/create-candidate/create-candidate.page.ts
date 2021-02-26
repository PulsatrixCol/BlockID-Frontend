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
  public imagen: any

  constructor(private blockchain:BlockchainService,
              private navCtrl: NavController, 
              private backendService: BackendService) { console.log(this.imagen)}

  ngOnInit() {
    this.pageName="Crear Candidato"

    this.backendService.getProgrammedElections().then((res:any[])  => {
      this.eleccionesProgramadas = res['res']
    })

  }

  crearCandidato(){
    this.blockchain.createCandidate(this.nombre,this.descrip,this.electionID,this.imagen);
    this.navCtrl.navigateRoot('superman');
  }

loadImageFromDevice(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => { // note using fat arrow function here if we intend to point at current Class context.
    this.imagen = reader.result;
  };
  reader.onerror = (error) => {
    //handle errors
  };
};
  
}
