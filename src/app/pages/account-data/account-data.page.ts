import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestHttpService } from '../../services/request-http.service';
import { EncryptService } from '../../services/encrypt.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.page.html',
  styleUrls: ['./account-data.page.scss'],
})
export class AccountDataPage implements OnInit {
  verifyData: boolean;
  documentType: number;
  documentNumber: number;
  birthDate: any;
  expeditionDate: any;
  genderId: any;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  gender: string;
  constructor(
    private navController: NavController,
    public requestHttpService: RequestHttpService,
    public encryptService: EncryptService
  ) { 
    this.verifyData = false;
  }

  ngOnInit() {
  }

  sendData() {
    console.log(this.documentNumber + ' this.documentNumber')
    console.log(this.documentType + ' this.documentType')
    console.log(this.expeditionDate + ' this.expeditionDate')
    console.log(this.birthDate + ' this.birthDate')
    let postData = {
      document_number: this.documentNumber,
      document_type: this.documentType,
      expedition_date: this.expeditionDate.substr(0, 10),
      birth_date: this.birthDate.substr(0, 10)
    }
    let data = this.encryptService.encrypt(JSON.stringify(postData), this.encryptService.key);
    let posttdata = {
      "payload": data
    }
    let params = {
      apiKey: 441252
    };
    this.requestHttpService.post('signup/cifin', posttdata, params).then(response => {
      console.log(response + '   respuesta formulario 2')
      this.verifyData = true;
      this.firstName = response.first_name;
      this.secondName = response.second_name;
      this.firstLastName = response.first_last_name;
      this.secondLastName = response.second_last_name;
      this.gender = response.gender.Name;
      this.encryptService.documentId = this.documentType;
      this.encryptService.documentNumber = this.documentNumber;
      this.encryptService.names = `${this.firstName} ${this.secondName}`;
      this.encryptService.lastNames = `${this.firstLastName} ${this.secondLastName}`;
      this.encryptService.genderId = this.genderId;
      this.encryptService.documentExpirationDate = this.expeditionDate.substr(0, 10);
      this.encryptService.birthDate = this.birthDate.substr(0, 10);
    });
  }

  sendVerifyData(){
    this.navController.navigateForward('/security');
  }

}
