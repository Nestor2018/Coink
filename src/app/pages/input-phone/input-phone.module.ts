import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPhonePageRoutingModule } from './input-phone-routing.module';

import { InputPhonePage } from './input-phone.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    InputPhonePageRoutingModule
  ],
  declarations: [InputPhonePage]
})
export class InputPhonePageModule {}
