import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PasajeroPage } from './pasajero/pasajero.page';
 import { LoginPage } from './login/login.page';
import { ChoferPage } from './chofer/chofer.page';
import { RegistroPage } from './registro/registro.page';
import { PerfilPage } from './perfil/perfil.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
   
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginPage
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: RegistroPage
    
  },
  {
    path: 'chofer',
    loadChildren: () => import('./chofer/chofer.module').then( m => m.ChoferPageModule)
  },
  {
    path: 'chofer',
    pathMatch: 'full',
    component:ChoferPage,
    children:[
      {
        path:'perfil',
        component: PerfilPage,
      }
    ]
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: '',
    redirectTo: 'pasajero',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'pasajero',
  //   pathMatch: 'full',
  //   component: PerfilPage
    
  // },
  // {
  //   path: 'restablecer-contrasenia',
  //   loadChildren: () => import('./restablecer-contrasenia/restablecer-contrasenia.module').then( m => m.RestablecerContraseniaPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'restablecer-contrasenia',
  //   pathMatch: 'full'
  // },
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
