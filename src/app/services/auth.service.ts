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
          /**PRETTY DANGEROUS PRACTICE, THINK ABOUT HOW TO FIX THIS. 
           * Is here only for research purposes.
          */
          localStorage.setItem('privkey',res['privkey'])
          localStorage.setItem('pubkey',res['pubkey'])
          localStorage.setItem('address',res['address'])
          localStorage.setItem('userId',res['userId'])
          localStorage.setItem('nombre',res['nombre'])
          localStorage.setItem('username',res['username'])
          resolve(res)
        }, err=> {
          this.toastService.dangerToast(err.error.mensaje)
        })
      })
    }

    getToken() {
      return localStorage.getItem(AUTH.token)
    }

    getUserId(){

    }
  
  
    getUserType() {
      return localStorage.getItem(AUTH.tipo)
    }

    logout() {
      localStorage.removeItem(AUTH.token)
      localStorage.removeItem(AUTH.tipo)
      localStorage.removeItem('pubkey')
      localStorage.removeItem('privkey')
      localStorage.removeItem('address')
      localStorage.removeItem('userId') 
      localStorage.removeItem('nombre')
      localStorage.removeItem('username')
      /*localStorage.removeItem(ESTABLECIMIENTO.aforo)
      localStorage.removeItem(ESTABLECIMIENTO.nombre)
      localStorage.removeItem(ESTABLECIMIENTO.nit)*/
    }
}
