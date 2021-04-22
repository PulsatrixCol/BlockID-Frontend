import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from './toast.service';
import { API_URL, AUTH} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  httpOptions: any

  constructor(    
    private http: HttpClient,
    private toastService:ToastService
    ) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+localStorage.getItem(AUTH.token)
        })
      }
     }
///REFACTORING ELIMINAR SERVICIO NEWKEYPAIR
     newkeypair(){
      return new Promise(resolve =>{
        this.http.get(API_URL + '/new_wallet'+'?userId=38bdf240-fa0e-11ea-9973-790c849ef6c4',this.httpOptions).subscribe(res => {
          localStorage.setItem('address',res['address'])
          localStorage.setItem('privkey',res['privkey'])
          localStorage.setItem('pubkey',res['pubkey'])
          resolve(res)
        }, err=> {
          this.toastService.dangerToast(err.error.mensaje)
        })
      })
     }

    doWeHaveKeys(){
      if(localStorage.getItem('address') === 'null'){
        return false
      }else{return true}
    }

    getBalance(address: any){
      return new Promise(resolve =>{
        this.http.get(API_URL + '/get_balances'+'?address='+address,this.httpOptions).subscribe(res => {
          //console.log(res)
          resolve(res)
        }, err=> {
          this.toastService.dangerToast(err.error.mensaje)
        })
      })
    }

    /**
     * Este servicio solo puede ser utilizado por usuarios logueados.
     * @param addressto 
     * @param qty 
     * @param assetname 
     */
    sendRaw(addressto: string, 
      qty: number, 
      assetname: string){
        const privatekey = localStorage.getItem('privkey')
        const address = localStorage.getItem('address')
        const body = {address,addressto,privatekey,qty,assetname}
        return new Promise(resolve =>{
          this.http.post(API_URL + '/sendWK',body,this.httpOptions,).subscribe(res => {
            //console.log(res)
            resolve(res)
            this.toastService.successToast('Fondos enviados satisfactoriamente.')
          }, err=> {
            this.toastService.dangerToast(err.error.mensaje)
            console.log(err)
          })
        })
      }

      /**
       * Crea una nuevo candidato a elecciones
       * OJO, DEBE RECIBIR MAS COSAS
       * @param nombre 
       * @param descrip 
       * @param EleccioneId
       */
    createCandidate(nombre: string, descrip: string,EleccioneId: string, foto: string){
        const body = {nombre,descrip,EleccioneId,foto}
        return new Promise(resolve =>{
          this.http.post(API_URL + '/createCandidate',body,this.httpOptions).subscribe(res => {
            //console.log(res)
            resolve(res)
            this.toastService.successToast('Candidato creado')
          }, err=> {
            this.toastService.dangerToast(err.error.mensaje)
            console.log(err)
          })
        })
      }

    getElectionStatistics(EleccioneId: string){
      const body = {EleccioneId}
      return new Promise(resolve =>{
        this.http.post(API_URL+'/get_elections_statistics',body,this.httpOptions).subscribe(res =>{
          resolve(res)
        }, err=> {
          this.toastService.dangerToast(err.error.mensaje)
          console.log(err)
        })
      })
    }
}
