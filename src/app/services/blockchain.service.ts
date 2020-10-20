import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from './toast.service';
import { API_URL } from '../../environments/environment';

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
          'Content-Type': 'application/json'
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
      if(localStorage.getItem('privkey') == 'null'){
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
}
