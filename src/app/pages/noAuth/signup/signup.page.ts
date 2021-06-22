import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { PopCodigoPaisComponent } from '../../../components/pop-codigo-pais/pop-codigo-pais.component';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ValidadoresService } from '../../../services/validadores.service';
import { UbicacionesService } from '../../../services/ubicaciones.service';
import { AUTH } from '../../../../environments/environment';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  departamentos: any;
  paises: any;
  aceptoTerminos: boolean;
  extranjero: boolean;
  ciudades: any;
  data: any = {
    username: '',
    nombre: null,
    celular: null,
    email: null,
    password: '',
    departamento: '',
    ciudad: '',
    pais: ''
  };

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private validadores: ValidadoresService,
    private ubicacionesService: UbicacionesService
  ) {}

  ngOnInit() {
    this.departamentos = this.ubicacionesService.getDepartamentos();
    this.extranjero = false;
    this.paises = this.ubicacionesService.getPaises();
  }

  departamentoChange() {
    this.ciudades = this.ubicacionesService.getCiudades(this.data.departamento);
  }

  signup(form: NgForm) {
    let pais = 'Colombia';
    let ciudad = form.value.ciudad;
    let departamento = form.value.departamento;
    if (this.extranjero){
      pais = form.value.pais;
      ciudad = 'extranjero';
      departamento = 'extranjero';
    }
    this.data = {
      username: form.value.username,
      password: form.value.password,
      verifypass: form.value.verifypass,
      nombre: form.value.nombre,
      celular: String(form.value.celular),
      email: form.value.email,
      departamento: departamento,
      ciudad: ciudad,
      pais
    };
    // console.log(data);
    if (!this.validadores.requeridoUsername(this.data.username)){
      return;
    }
    if (!this.validadores.validarEmail(this.data.email)) {
      return;
    }
    if (!this.validadores.validarCelular(this.data.celular)){
      return;
    }
    if (!this.validadores.validaContrasena(this.data.password, this.data.verifypass)){
      return;
    }
    if (!this.validadores.requeridoDepto(this.data.departamento)){
      return;
    }
    if (!this.validadores.requeridoCity(this.data.ciudad)){
      return;
    }
    if (this.extranjero){
      if (!this.validadores.requeridoPais(this.data.pais)){
        return;
      }
    }
    this.authService.signup(this.data).then((res) => {
      this.navController.navigateRoot('tabs');
    });
  }
}
