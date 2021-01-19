import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'


@Component({
  selector: 'app-cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrls: ['./cast-vote.component.scss'],
})
export class CastVoteComponent implements OnInit {
  @Input() electionId: string

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    console.log(this.electionId)
    this.backendService.getCandidates(this.electionId).then((res:any[])  => {
      console.log( res['cands'])
    })
  }

}
