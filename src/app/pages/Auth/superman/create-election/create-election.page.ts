import { Component, OnInit } from '@angular/core';
import {BackendService } from '../../../../services/backend.service';
import { NavController} from '@ionic/angular'
import { DateTime } from 'luxon';


@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.page.html',
  styleUrls: ['./create-election.page.scss'],
})
export class CreateElectionPage implements OnInit {
  public pageName: string
  public nombre: string
  public entidades: any[]
  public entidad: any
  public fecha_inicio: string
  public fecha_fin: string
  public descripcion: string
  public year: string
  public month: string
  public day: string
  public hour: string
  public minute: string
  public second: string
  public lista_meses: any[]

  customPickerOptions: any;


  constructor(private backendService: BackendService, private navCtrl: NavController) { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: () => console.log('click capturado')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
    this.lista_meses = []
    //console.log(DateTime.local())
    this.year = DateTime.local().year
    this.month = DateTime.local().month
    this.day = DateTime.local().day
    this.hour = DateTime.local().hour
    this.minute = DateTime.local().minute
    this.second = DateTime.local().second
    this.pageName = 'Crear Elección'

    this.backendService.getInstitutionsList().then((res:any[])  => {
      this.entidades = res['institutions']
    })
    for (let index = parseInt(this.month); index <= 12; index++) {
      this.lista_meses.push(index)
    }
  }

  createElection(){
    /*
    console.log(this.fecha_inicio)
    console.log(this.fecha_fin)
    console.log(this.descripcion)
    console.log(this.entidad)*/
    this.backendService.createElection(this.nombre, this.fecha_inicio, this.fecha_fin, this.entidad,this.descripcion);
    this.navCtrl.navigateRoot('superman');
  }

}
