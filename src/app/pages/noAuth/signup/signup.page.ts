import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { PopCodigoPaisComponent } from '../../../components/pop-codigo-pais/pop-codigo-pais.component';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ValidadoresService } from '../../../services/validadores.service';
import { AUTH } from '../../../../environments/environment';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username = '';
  nombre = '';
  celular = '';
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private validadores: ValidadoresService,
  ) {}

  ngOnInit() {}

  signup(form: NgForm) {
    const data = {
      username: form.value.username,
      password: form.value.password,
      verifypass: form.value.verifypass,
      nombre: form.value.nombre,
      celular: String(form.value.celular),
      email: form.value.email,

    };
    //console.log(data);
    if (!this.validadores.validarEmail(data.email)) {
      return;
    }
    if (!this.validadores.validarCelular(data.celular)){
      return;
    }
    if (!this.validadores.validaContrasena(data.password, data.verifypass)){
      return;
    }
    this.authService.signup(data).then((res) => {
      this.navController.navigateRoot('tabs');
    });
  }
}
