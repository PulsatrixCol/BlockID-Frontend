import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from './toast.service';
import { API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewkeypairService {
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
     newkeypair(userId: any){
      return new Promise(resolve =>{
        this.http.get(API_URL + '/new_wallet'+'?userId='+userId,this.httpOptions).subscribe(res => {
          localStorage.setItem('address',res['address'])
          //localStorage.setItem('privkey',res['privkey'])
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
}
