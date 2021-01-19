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

  createElection(
    Nombre_eleccion: string, 
    hora_inicio: string, 
    hora_fin: string,
    InstitucioneId: string,
    descripcion: string
    ){
    const body = {Nombre_eleccion,hora_inicio,hora_fin,InstitucioneId,descripcion}
    return new Promise(resolve =>{
      this.http.post(API_URL + '/createElection',body,this.httpOptions).subscribe(res => {
        //console.log(res)
        this.toastService.successToast("Elección creada satisfactoriamente")
        resolve(res)
      }, err=> {
        this.toastService.dangerToast(err.mensaje)
        console.log(err)
      })
    })
  }

  /********************************
   * Get all the elections programmed in the platform
   */
  getProgrammedElections(){
    return new Promise(resolve =>{
      this.http.get(API_URL + '/get_programmed_elections',this.httpOptions).subscribe(res => {
        //console.log(res)
        resolve(res)
      }, err=> {
        this.toastService.dangerToast(err.mensaje)
        console.log(err)
      })
    })
  }

   /********************************
   * Get the ongoing elections in the platform
   */
  getActiveElections(){
    return new Promise(resolve =>{
      this.http.get(API_URL + '/get_active_elections',this.httpOptions).subscribe(res => {
        //console.log(res)
        resolve(res)
      }, err=> {
        this.toastService.dangerToast(err.mensaje)
        console.log(err)
      })
    })
  }

   /********************************
   * Get candidates in a particular election
   */
  getCandidates(electionsId: string){
    electionsId=electionsId.replace(/["']/g, "" );
    return new Promise(resolve =>{
      this.http.get(API_URL + '/get_candidates'+'?electionId='+electionsId,this.httpOptions).subscribe(res => {
        //console.log(res)
        resolve(res)
      }, err=> {
        this.toastService.dangerToast(err.mensaje)
        console.log(err)
      })
    })
  }

}
