import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'input-phone',
    loadChildren: () => import('./pages/input-phone/input-phone.module').then( m => m.InputPhonePageModule)
  },
  {
    path: 'account-data',
    loadChildren: () => import('./pages/account-data/account-data.module').then( m => m.AccountDataPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'data-update',
    loadChildren: () => import('./pages/data-update/data-update.module').then( m => m.DataUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
