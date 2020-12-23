import { Component, OnInit } from '@angular/core';
import {BackendService } from '../../../../services/backend.service';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.page.html',
  styleUrls: ['./create-election.page.scss'],
})
export class CreateElectionPage implements OnInit {
  public pageName: string
  public nombre: string
  public entidades: any[]

  constructor(private backendService: BackendService) { 
    
  }

  ngOnInit() {
    this.pageName = 'Crear Elección'
    this.backendService.getInstitutionsList().then((res:any[])  => {
      this.entidades = res['Res']
    })
  }

}
