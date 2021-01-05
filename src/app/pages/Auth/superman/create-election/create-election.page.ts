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
  public year: string
  public month: string
  public day: string
  public hour: string
  public minute: string
  public second: string

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;


  constructor(private backendService: BackendService) { 
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
    console.log(DateTime.local())
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
  }

  createElection(){

  }

}
