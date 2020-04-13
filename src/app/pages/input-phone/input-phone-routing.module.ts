import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPhonePage } from './input-phone.page';

const routes: Routes = [
  {
    path: '',
    component: InputPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputPhonePageRoutingModule {}
