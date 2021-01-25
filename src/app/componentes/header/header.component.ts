import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageName: string
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  public async goLanding(){
    //this.modal.presentModal()
    this.navCtrl.navigateRoot('tabs');
  }

  public async goBack(){
    //this.modal.presentModal()
    this.navCtrl.navigateBack
  }

}
