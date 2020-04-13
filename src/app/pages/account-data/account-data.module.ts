import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDataPageRoutingModule } from './account-data-routing.module';

import { AccountDataPage } from './account-data.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDataPageRoutingModule
  ],
  declarations: [AccountDataPage]
})
export class AccountDataPageModule {}
