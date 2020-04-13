import { Component, OnInit } from '@angular/core';
import { RequestHttpService } from '../../services/request-http.service';
import { EncryptService } from '../../services/encrypt.service';
import { OutPutsService } from '../../services/out-puts.service';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.page.html',
  styleUrls: ['./input-phone.page.scss'],
})
export class InputPhonePage implements OnInit {
  screenCode: string;
  phoneNumber: string;
 
  constructor(
    public requestHttpService: RequestHttpService,
    public encryptService: EncryptService,
    public outPutsService: OutPutsService
  ) {
    this.screenCode = '1';
   }

  ngOnInit() {  

  }

  phoneNumberSubscribed(ev: any){
    this.encryptService.phoneNumber = ev;
    let postData = {
      phone_number: ev,
      imei: 1234
    };
    let data = this.encryptService.encrypt(JSON.stringify(postData), this.encryptService.key);
    let posttdata = {
      "payload": data
    }
    console.log(data + 'cosa encriptada')
    let params = {
      apiKey: 441252
    };
    this.requestHttpService.post('login/verifyDirectLogin', posttdata, params).then(response => {
      console.log(response + '  respuesta del servidor')
    }).catch(err => {
      console.log(JSON.stringify(err) + ' error de la peticion')
      if(err.error.message === 'Not account found'){
        this.screenCode = '2';
      } else if(err.error.code == "PRE_VALIDATION_INVALID"){
        console.log('-------------es invalido---------------------')
        this.outPutsService.presentAlert('Formato no valido', 'El valor ingresado no coincide con un formato valido');
      }
    })
    ;
    console.log(ev);
    this.phoneNumber = ev;
  }
}
