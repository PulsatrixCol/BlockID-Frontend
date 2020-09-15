import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(		
    private navCtrl: NavController,
    private authService:AuthService) {}
    
    logout() {		
      this.authService.logout()
      this.navCtrl.navigateRoot('')
    }

}
