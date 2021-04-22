import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( !this.authService.getToken() ){
        return true;
      }
      else {
        switch(this.authService.getUserType()){
          case '1':
            this.navCtrl.navigateRoot('superman');
            break;
          case '2':
            this.navCtrl.navigateRoot('tabs');
            break;
        }
      }
  }
}
