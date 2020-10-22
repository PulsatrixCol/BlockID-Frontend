import { Component, OnInit, Input } from '@angular/core'
import {NewkeypairService} from '../../services/newkeypair.service'

@Component({
  selector: 'app-nueva-identidad',
  templateUrl: './nueva-identidad.component.html',
  styleUrls: ['./nueva-identidad.component.scss'],
})
export class NuevaIdentidadComponent implements OnInit {
  tengoLlaves=false
  @Input() llave: string
  @Input() pubkey: string
  
  constructor(private newkeypair:NewkeypairService) { 
    this.tengoLlaves = this.newkeypair.doWeHaveKeys()
   }

  ngOnInit() {}

  newKeys(){
    this.newkeypair.newkeypair(localStorage.getItem('userId')).then(res => {
      this.llave=res['address']
      this.pubkey=localStorage.getItem('pubkey')
      this.tengoLlaves = this.newkeypair.doWeHaveKeys()
    })
    
  }

}
