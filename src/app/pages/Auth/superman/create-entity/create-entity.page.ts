import { Component, OnInit } from '@angular/core';
import {BackendService } from '../../../../services/backend.service';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.page.html',
  styleUrls: ['./create-entity.page.scss'],
})
export class CreateEntityPage implements OnInit {
  public pageName: string
  public nombre: string
  public notas: string
  public sitio_web: string
  public NIT: string
  public email: string
  public showTabla: boolean
  constructor(private backendService:BackendService,private navCtrl: NavController){ }

  ngOnInit() {
    this.pageName="Crear nueva entidad"
    this.showTabla = true
  }

  crearEntity(){
    this.backendService.createEntity(this.nombre, this.notas, this.sitio_web, this.NIT,this.email);
    this.navCtrl.navigateRoot('superman');
  }
}
