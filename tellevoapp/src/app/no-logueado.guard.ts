import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoLogueadoGuard implements CanActivate {
  //CREACIÓN DE CONSTRUCTOR PARA LA UTILIZACIÓN DE LA CLASE ROUTER.
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //**********OBTENCIÓN DE LOS DATOS EN LOCALSTORAGE.**********
      var datosLogin = JSON.parse(localStorage.getItem('login'));
      /**********OBTENCIÓN DE LOS DATOS EN LOCALSTORAGE.**********/
      //USUARIO INGRESADO A LA APLICACIÓN SIN LOGUEARSE.
      if( datosLogin.logueado === "S/N"){
        //RETORNA TRUE PERMITIÉNDOLE PODER LOGUEARSE        
        return true;
      }else{
        //SI EL USUARIO YA ESTÁ LOGUEADO.
        if(datosLogin.logueado === 'true'){
          //RETORNA FALSE, ASÍ NO PODRÁ VOLVER AL PAGE HOME.
          return false;
        
        }else{
          //SI EL USUARIO DEJA DE ESTAR LOGUEADO
          if(datosLogin.logueado === 'false'){
            //RETORNA TRUE PARA PERMITIRLE INGRESAR NUEVAMENTE.
            return true;
            
          }
        }  
      
      }
      
  }
  
}
