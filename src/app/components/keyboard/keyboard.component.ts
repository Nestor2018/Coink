import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input() screenCode: any;
  @Output() subscribed  = new EventEmitter<string>();
  zero: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
  ultimoNumero: string;
  numberPhone: string;
  disabled: boolean;
  constructor(
    private navController: NavController
  ) { 
    this.disabled = false;
    this.numberPhone = '';
    this.zero = '0';
    this.one = '1';
    this.two = '2';
    this.three = '3';
    this.four = '4';
    this.five = '5';
    this.six = '6';
    this.seven = '7';
    this.eight = '8';
    this.nine = '9';
  }

  ngOnInit() {
    console.log(this.screenCode + ' screenCode del keyboard')
  }

  addNumber(number){
    this.ultimoNumero = number;
    this.numberPhone = this.numberPhone + number;
    console.log(this.numberPhone);
    if (this.numberPhone.length >= 10) {
      this.disabled = true;
    }
  }

  deleteNumber(){
    this.numberPhone = this.numberPhone.substr(0, (this.numberPhone.length - 1));
    if (this.numberPhone.length < 10) {
      this.disabled = false;
    }
  }

  sendPhoneNumber() {
    if (this.screenCode == '1') {
      this.subscribed.emit(`57${this.numberPhone}`);
    } else {
      this.navController.navigateForward('/account-data');
    }
  }
} 
