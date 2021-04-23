import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public tengoLlaves: boolean;

  constructor(private blockchain: BlockchainService) {
    // Usseless
    this.tengoLlaves = this.blockchain.doWeHaveKeys();
  }

  ngOnInit() {
    // useless
    this.tengoLlaves = this.blockchain.doWeHaveKeys();
    console.log(this.tengoLlaves)
  }

}
