import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, AUTH } from '../../environments/environment';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions: any

  constructor( 
    private http: HttpClient,
    private toastService: ToastService,
    )
    {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    }

    async login(data: any){
      return new Promise(resolve =>{
        this.http.post(API_URL + '/autenticacion', data, this.httpOptions).subscribe(res => {
          console.log(res)
          localStorage.setItem(AUTH.token, res['token']);
          localStorage.setItem(AUTH.tipo, res['rol']);
          localStorage.setItem('pubkey', res['pubkey']);
          localStorage.setItem('address', res['address']);
          localStorage.setItem('userId', res['userId']);
          localStorage.setItem('nombre', res['nombre']);
          localStorage.setItem('username', res['username']);
          localStorage.setItem('departamento', res['departamento']);
          localStorage.setItem('ciudad', res['ciudad']);
          localStorage.setItem('pais', res['pais']);
          localStorage.setItem('nombre', res['nombre']);
          resolve(res);
        }, err => {
          this.toastService.dangerToast(err.error.mensaje);
        });
      });
    }

    async signup(data: any){
      return new Promise(resolve =>{
        this.http.post(API_URL + '/signup', data, this.httpOptions).subscribe(res => {
          localStorage.setItem(AUTH.token, res['token']);
          localStorage.setItem(AUTH.tipo, res['rol']);
          localStorage.setItem('address', res['address']);
          localStorage.setItem('userId', res['userId']);
          localStorage.setItem('departamento', res['departamento']);
          localStorage.setItem('ciudad', res['ciudad']);
          localStorage.setItem('pais', res['pais']);
          localStorage.setItem('nombre', res['nombre']);
          resolve(res);
        }, err => {
          this.toastService.dangerToast(err.error.mensaje);
        });
      });
    }

    async changePass(data: any){
      console.log(data);
      return new Promise(resolve =>{
        this.http.post(API_URL + '/cambiar_contrasena', data, this.httpOptions).subscribe(res => {
          this.toastService.successToast('Contraseña cambiada correctamente');
          resolve(res);
        }, err => {
          this.toastService.dangerToast(err.error.mensaje);
        });

      })
    }

    getToken() {
      return localStorage.getItem(AUTH.token);
    }

    getUserId(){

    }
  
  
    getUserType() {
      return localStorage.getItem(AUTH.tipo);
    }

    logout() {
      localStorage.removeItem(AUTH.token);
      localStorage.removeItem(AUTH.tipo);
      localStorage.removeItem('pubkey');
      localStorage.removeItem('privkey');
      localStorage.removeItem('address');
      localStorage.removeItem('userId') ;
      localStorage.removeItem('nombre');
      localStorage.removeItem('username');
      localStorage.removeItem('ciudad');
      localStorage.removeItem('departamento');
      /*localStorage.removeItem(ESTABLECIMIENTO.aforo)
      localStorage.removeItem(ESTABLECIMIENTO.nombre)
      localStorage.removeItem(ESTABLECIMIENTO.nit)*/
    }
}
