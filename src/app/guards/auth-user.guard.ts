import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH } from '../../environments/environment';
import { NavController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private menuCtrl: MenuController
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      switch (this.authService.getUserType()){
        case '2':
          this.menuCtrl.enable(true, 'autenticado-user');
          this.menuCtrl.enable(false, 'autenticado-superman');
          return true;
          break
        case '1':
          this.menuCtrl.enable(false, 'autenticado-user');
          this.menuCtrl.enable(true, 'autenticado-superman');
          return true;
          break
      }
      return this.navCtrl.navigateRoot('login')
  }
  
}
