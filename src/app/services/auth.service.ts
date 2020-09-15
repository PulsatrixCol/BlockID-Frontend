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
    private toastService:ToastService,
    ) 
    { 
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    }

    login(data: any){
      return new Promise(resolve =>{
        this.http.post(API_URL + '/autenticacion',data,this.httpOptions).subscribe(res => {
          localStorage.setItem(AUTH.token,res['token'])
          localStorage.setItem(AUTH.tipo,res['rol'])
          resolve(res)
        }, err=> {
          this.toastService.dangerToast(err.error.mensaje)
        })
      })
    }

    getToken() {
      return localStorage.getItem(AUTH.token)
    }
  
  
    getUserType() {
      return localStorage.getItem(AUTH.tipo)
    }

    logout() {
      localStorage.removeItem(AUTH.token)
      localStorage.removeItem(AUTH.tipo)
      /*localStorage.removeItem(ESTABLECIMIENTO.aforo)
      localStorage.removeItem(ESTABLECIMIENTO.nombre)
      localStorage.removeItem(ESTABLECIMIENTO.nit)*/
    }
}
