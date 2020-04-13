import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataUpdatePage } from './data-update.page';

const routes: Routes = [
  {
    path: '',
    component: DataUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataUpdatePageRoutingModule {}
