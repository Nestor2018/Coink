import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EncryptService } from '../../services/encrypt.service';
import { RequestHttpService } from '../../services/request-http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OutPutsService } from '../../services/out-puts.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {
  createAccount: FormGroup;
  constructor(
    private navController: NavController,
    public requestHttpService: RequestHttpService,
    public encryptService: EncryptService,
    private formBuilder: FormBuilder,
    public outPutsService: OutPutsService
  ) { 
    this.confiForm();
  }

  ngOnInit() {
  }

  sendConfiguration() {
    this.navController.navigateForward('/data-update');
  }

  confiForm() {
    this.createAccount = this.formBuilder.group({
        email: ['', Validators.required],
        emailConfirmation: ['', Validators.required],
        pin: ['', Validators.required],
        pinConfirmation: ['', Validators.required]
    });
  }

  validateForm() {
    if (!this.createAccount.invalid) {
      console.log('entro a validar')
      let newPin = this.createAccount.get('pin').value;
      let validateNewPin =  this.createAccount.get('pinConfirmation').value;
      let newEmail = this.createAccount.get('email').value;
      let validateNewEmail =  this.createAccount.get('emailConfirmation').value;
      if((newPin === validateNewPin) && (newEmail === validateNewEmail)) {
        this.sendData();
      } else {
        console.log(" no son iguales")
        this.outPutsService.presentAlert('Los datos no coinciden', 'Verifica que los correos o las contraseñas sean iguales');
      }
    } else {
    }
  }

  sendData() {
    let postData = {
      phone_number: this.encryptService.phoneNumber,
      names : this.encryptService.names,
      last_names: this.encryptService.lastNames,
      document_id: this.encryptService.documentId,
      document_number: this.encryptService.documentNumber ,
      document_expiration_date: this.encryptService.documentExpirationDate,
      birth_date: this.encryptService.birthDate,
      gender_id: this.encryptService.genderId,
      pin: this.createAccount.get('pin').value,
      email: this.createAccount.get('email').value,
      imei: this.encryptService.imei,
      push_registration_id: this.encryptService.pushRegistrationId,
      topic_registration_id: this.encryptService.topicRegistrationId,
      state_id: '1',
      city_id: '2',
      address: 'asdfih',
      referrer_phonenumbe: 'android',
    }
    let data = this.encryptService.encrypt(JSON.stringify(postData), this.encryptService.key);
    let posttdata = {
      "payload": data
    }
    let params = {
      apiKey: 441252
    };
    this.requestHttpService.post('signup/v2', posttdata, params).then(response => {
      console.log(response + '   respuesta final')
    }).catch(err => {
      console.log(err)
        this.outPutsService.presentAlert('Formato no valido', err.error.message);
    });
  }
}
