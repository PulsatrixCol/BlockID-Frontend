import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.page.html',
  styleUrls: ['./create-election.page.scss'],
})
export class CreateElectionPage implements OnInit {
  public pageName: string

  constructor() { }

  ngOnInit() {
    this.pageName = 'Crear Elección'
  }

}
