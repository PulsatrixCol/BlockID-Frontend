import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
//import { PopCodigoPaisComponent } from '../../../components/pop-codigo-pais/pop-codigo-pais.component';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AUTH } from '../../../../environments/environment';
//import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string = ''
  password:string = ''
  rol:string = ''
  tipos:any

  constructor(
    private popController:PopoverController,
    private authService:AuthService,
    private navController:NavController
    //protected $gaService: GoogleAnalyticsService
    ) { }

  ngOnInit() {
  }

  autenticarUsuario(form : NgForm)
  {
    let data = {
      username: form.value.username,
      password:form.value.password,
      rol:form.value.rol
    }
    this.authService.login(data).then(res => {
      switch (localStorage.getItem(AUTH.tipo)){
        case '2':
          this.navController.navigateRoot('tabs')
          break
        case '1':
          this.navController.navigateRoot('superman')
          break

      }

    })
  }

  registro(){
    this.navController.navigateForward('registro')
  }

}
