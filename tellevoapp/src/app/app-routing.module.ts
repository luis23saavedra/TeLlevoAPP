import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PasajeroPage } from './pasajero/pasajero.page';
 import { LoginPage } from './login/login.page';
import { ChoferPage } from './chofer/chofer.page';
import { RegistroPage } from './registro/registro.page';
import { PerfilPage } from './perfil/perfil.page';
import { NoLogueadoGuard } from './no-logueado.guard';
import { RegpasajeroPage } from './regpasajero/regpasajero.page';
import { RestablecerContraseniaPage } from './restablecer-contrasenia/restablecer-contrasenia.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[NoLogueadoGuard]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
   
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginPage
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },
  {
    path: '',
    pathMatch: 'full',
    component: RegistroPage
    
  },
  {
    path: 'chofer',
    loadChildren: () => import('./chofer/chofer.module').then( m => m.ChoferPageModule),
    // canActivate:[NoLogueadoGuard]
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
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule),

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
  {
    path: 'error404',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: 'regpasajero',
    loadChildren: () => import('./regpasajero/regpasajero.module').then( m => m.RegpasajeroPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: RegpasajeroPage
  },
  {
    path: 'dialog-reg',
    loadChildren: () => import('./dialog/dialog-reg/dialog-reg.module').then( m => m.DialogRegPageModule)
  },
  
  
  {
    path: 'restablecer-contrasenia',
    loadChildren: () => import('./restablecer-contrasenia/restablecer-contrasenia.module').then( m => m.RestablecerContraseniaPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: RestablecerContraseniaPage
  },
  {
    path: 'dialog-error-login',
    loadChildren: () => import('./dialog/dialog-error-login/dialog-error-login.module').then( m => m.DialogErrorLoginPageModule)
  },
  {
    path: 'dialog-error-contrasenia',
    loadChildren: () => import('./dialog/dialog-error-contrasenia/dialog-error-contrasenia.module').then( m => m.DialogErrorContraseniaPageModule)
  },
  {
    path: 'dialog-cancelar-viaje',
    loadChildren: () => import('./dialog/dialog-cancelar-viaje/dialog-cancelar-viaje.module').then( m => m.DialogCancelarViajePageModule)
  },
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
