import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import {ToastService } from '../../services/toast.service'
import { DateTime } from 'luxon';
import { NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.scss'],
})
export class ListaElementosComponent implements OnInit {
  /*******************************
   * INCOMPLETA, SE DEBE TERMINAR PARA FUTUROS USO, POR AHORA EL LISTADO QUE SE NECESITABA SE ESTA
   * HACIENDO DESDE LA PAGINA (CREAR ELECCION)
   */
  @Input() tipoTabla: string

  registros: any[]

  constructor(
    private backendService: BackendService,
    private toastService: ToastService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {


   if(this.tipoTabla === 'activeElectionsUser'){
    this.backendService.getActiveElections().then((res:any[])  => {
      this.registros = res['Res']
      for (let index = 0; index < this.registros.length; index++) {
        this.registros[index]['hora_fin'] = DateTime.fromISO(this.registros[index]['hora_fin']).toLocaleString(DateTime.DATETIME_FULL)
        this.registros[index]['hora_inicio'] = DateTime.fromISO(this.registros[index]['hora_inicio']).toLocaleString(DateTime.DATETIME_FULL)
      }
    });
   }

   if(this.tipoTabla === 'finishedElectionsUser'){
    this.backendService.getFinishedElections().then((res:any[])  => {
      this.registros = res['Res']
    

      for (let index = 0; index < this.registros.length; index++) {
        this.registros[index]['hora_fin'] = DateTime.fromISO(this.registros[index]['hora_fin']).toLocaleString(DateTime.DATETIME_FULL)
        this.registros[index]['hora_inicio'] = DateTime.fromISO(this.registros[index]['hora_inicio']).toLocaleString(DateTime.DATETIME_FULL)
        
        
      }
    })
   }


  }

  goPoll(registro: any){
    //console.log(registro)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        electionId: JSON.stringify(registro.id)
      }
    };
    this.navCtrl.navigateForward('cast-vote',navigationExtras)
  }
}
