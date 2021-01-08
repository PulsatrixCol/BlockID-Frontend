import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import {ToastService } from '../../services/toast.service'
import { DateTime } from "luxon";

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
    private toastService: ToastService
  ) { }

  ngOnInit() {
    /*
    this.backendService.getInstitutionsList().then((res:any[])  => {
     
      this.registros = res['Res']
    }) */

   if(this.tipoTabla == "activeElectionsUser"){
    this.backendService.getActiveElections().then((res:any[])  => {
      this.registros = res['Res']
    

      for (let index = 0; index < this.registros.length; index++) {
        this.registros[index]['hora_fin'] = DateTime.local(this.registros[index].hora_fin)
        
        
      }
    })
   }
  }

}
