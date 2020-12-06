import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.scss'],
})
export class ListaElementosComponent implements OnInit {
  
  @Input() tipoTabla: string

  registros: any[]

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.backendService.getInstitutionsList().then((res:any[])  => {
      console.log(res['Res'])
      this.registros = res['Res']
    })
  }

}
