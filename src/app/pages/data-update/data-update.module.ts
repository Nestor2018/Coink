import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataUpdatePageRoutingModule } from './data-update-routing.module';

import { DataUpdatePage } from './data-update.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DataUpdatePageRoutingModule
  ],
  declarations: [DataUpdatePage]
})
export class DataUpdatePageModule {}
