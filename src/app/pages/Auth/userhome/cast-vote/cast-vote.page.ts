import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-cast-vote-page',
  templateUrl: './cast-vote.page.html',
  styleUrls: ['./cast-vote.page.scss'],
})
export class CastVotePage implements OnInit {
  electionId: string
  pageName: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.electionId = params["electionId"];
    });
    this.pageName = "Emitir voto"
  }

}
