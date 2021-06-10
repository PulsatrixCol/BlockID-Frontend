
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { ValidadoresService } from '../../../services/validadores.service';



@Component({
  selector: 'app-cambiarpass',
  templateUrl: './cambiarpass.page.html',
  styleUrls: ['./cambiarpass.page.scss'],
})
export class CambiarpassPage implements OnInit {



  constructor(
    private authService: AuthService,
    private validationService: ValidadoresService,
    private navController: NavController
  ) {

  }

  ngOnInit() {
  }

  cambialo(form: NgForm){
    const data = {
      password: form.value.password,
      verifypass: form.value.verifypass,
    };
    if (!this.validationService.validaContrasena(data.password, data.verifypass)){
      return;
    }
    const dataToSend = {
      pass: data.password,
      user_id: localStorage.getItem('userId')
    }
    this.authService.changePass(dataToSend).then((res) => {
      console.log('--->'+ res);
      this.navController.navigateBack('/tabs/tab3');
    });
  }

 
}
