import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OutPutsService {

  constructor(
    public alertController: AlertController
  ) { }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: ['Volver']
   });
   await alert.present(); 
}
}
