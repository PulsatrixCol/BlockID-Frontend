import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'nueva-identidad',
  templateUrl: './nueva-identidad.component.html',
  styleUrls: ['./nueva-identidad.component.scss'],
})
export class NuevaIdentidadComponent implements OnInit {
  @Input() pubkey: string;
  constructor() { }

  ngOnInit() {}

}
