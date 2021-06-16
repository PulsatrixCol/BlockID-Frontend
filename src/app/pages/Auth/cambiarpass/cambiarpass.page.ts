
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
  data: any = {
    password: '',
    verifypass: ''
  }


  constructor(
    private authService: AuthService,
    private validationService: ValidadoresService,
    private navController: NavController
  ) {

  }

  ngOnInit() {
  }

  cambialo(form: NgForm){
    this.data = {
      password: form.value.password,
      verifypass: form.value.verifypass,
    };
    if (!this.validationService.validaContrasena(this.data.password, this.data.verifypass)){
      return;
    }
    const dataToSend = {
      pass: this.data.password,
      user_id: localStorage.getItem('userId')
    }
    this.authService.changePass(dataToSend).then((res) => {
      console.log('--->'+ res);
      this.navController.navigateBack('/tabs/tab3');
    });
  }

 
}
