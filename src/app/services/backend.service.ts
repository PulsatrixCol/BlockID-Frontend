import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from './toast.service';
import { API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  httpOptions: any

  constructor(
    private http: HttpClient,
    private toastService:ToastService
  ) { 
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }
  }

  getInstitutionsList() {
    return new Promise(resolve =>{
      this.http.get(API_URL + '/get_active_institutions',this.httpOptions).subscribe(res => {
        resolve(res)
      }, err=> {
        this.toastService.dangerToast(err.error.mensaje)
      })
    })
  }

  createEntity(
    nombre: string, 
    notas: string, 
    sitio_web: string,
    NIT: string,
    email: string
    ){
    const body = {nombre,notas,sitio_web,NIT,email}
    return new Promise(resolve =>{
      this.http.post(API_URL + '/createInstitucion',body,this.httpOptions).subscribe(res => {
        //console.log(res)
        this.toastService.successToast("Institución creada satisfactoriamente")
        resolve(res)
      }, err=> {
        this.toastService.dangerToast(err.mensaje)
        console.log(err)
      })
    })
  }

}
