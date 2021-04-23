import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  message: string;
  constructor(
    private toastController: ToastController
    ) { }

  dangerToast(cadena: any){
    this.toastController.create({
      duration: 3000,
      message: cadena,
      color: 'danger'
    }).then(toast => {
      toast.present();
    });
  }

  successToast(cadena: any){
    this.toastController.create({
      duration: 3000,
      message: cadena,
      color: 'success'
    }).then(toast => {
      toast.present();
    });
  }

  warningToast(cadena: any){
    this.toastController.create({
      duration: 3000,
      message: cadena,
      color: 'warning'
    }).then(toast => {
      toast.present();
    });
  }
}
