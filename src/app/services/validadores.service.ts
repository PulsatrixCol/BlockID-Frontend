import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor(
    private ui: ToastService
  ) { }


  validarEmail(email: string): boolean {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailRegex.test(email)) {
      this.ui.dangerToast('Por favor ingresa un email válido');
      return false;
    }

    return true;
  }

  validarCelular(celular: string): boolean {
    let numeroRegex = /^[0-9]+$/;

    if (!numeroRegex.test(celular)) {
      this.ui.dangerToast('Por favor ingresa un celular válido');
      return false;
    }

    if (celular.length > 15) {
      this.ui.dangerToast('Por favor ingresa un celular válido');
      return false;
    }

    return true;
  }


  validaContrasena(password: string, verifypass: string): boolean {
    if (password.length < 6) {
      this.ui.dangerToast('La contraseña debe tener por lo menos 6 caracteres');
      return false;
    }
    // tslint:disable-next-line: triple-equals
    if (password !== verifypass){
      this.ui.dangerToast('Las contraseñas no coinciden.');
      console.log(password+'    '+verifypass);
      return false;
    }
    return true;
  }

  requeridoDepto(cadena: string): boolean {
    if (cadena.length === 0) {
      this.ui.dangerToast('Ingresa el departamento donde votas');
      return false;
    }
    return true;
  }

  requeridoCity(cadena: string): boolean {
    if (cadena.length === 0) {
      this.ui.dangerToast('Ingresa la ciudad donde votas');
      return false;
    }
    return true;
  }

  requeridoUsername(cadena: string): boolean {
    if (cadena.length === 0) {
      this.ui.dangerToast('Ingresa un nombre de usuario.');
      return false;
    }
    return true;
  }

  requeridoPais(cadena: string): boolean {
    if (cadena.length === 0) {
      this.ui.dangerToast('Ingresa tu país de residencia.');
      return false;
    }
    return true;
  }

}
