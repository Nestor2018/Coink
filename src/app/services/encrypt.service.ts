import { Injectable } from '@angular/core';
import { enc, TripleDES, MD5, mode,  pad} from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI0NDEyNTIiLCJWZXJzaW9uIjoiMS4wLjAifQ.OHyAIQwymM8QKo0ETrP8QIpneMEvJncMdgb3YCBbPTY";
  phoneNumber: any;
  names: any;
  lastNames: any;
  documentId: number;
  documentNumber: any;
  documentExpirationDate: any;
  birthDate: any;
  genderId: number;
  pin: string;
  email: string;
  imei: string = "lasdhflksad";
  pushRegistrationId: string = "dsgfadsfas";
  topicRegistrationId: string = "asfdsaf";

  constructor() { }

  encrypt(serialized_json: string, key: string): string {
    const toEncryptedArray = enc.Utf8.parse(serialized_json);
    const keyHash = this.getKeyHash(key);
    const payload = TripleDES.encrypt(toEncryptedArray, keyHash, {mode: mode.ECB, padding: pad.Pkcs7});

    return payload.ciphertext.toString(enc.Base64);
  }

  private getKeyHash(key: string) {
    console.log('entro 2')
    let securityKeyArray = MD5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);

    return enc.Hex.parse(securityKeyArray);
  }
}
