import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import {ToastService } from '../../services/toast.service'

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.scss'],
})
export class ListaElementosComponent implements OnInit {
  
  @Input() tipoTabla: string

  registros: any[]

  constructor(
    private backendService: BackendService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.backendService.getInstitutionsList().then((res:any[])  => {
      this.registros = res['Res']
    })
  }

}
