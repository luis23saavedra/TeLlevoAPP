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
      //OBTENCIÓN DE LOS DATOS ALMACENADOS EN LOCALSTORAGE, ESTOS SE PARSEAN DE STRING A JSON.
      var datosLogin = JSON.parse(localStorage.getItem('login'));
      //OBTENCIÓN DE LOS DATOS ALMACENADOS EN LOCALSTORAGE, ESTOS SE PARSEAN DE STRING A JSON.
      var datosUsuario = JSON.parse(localStorage.getItem('usuario'));
      //CUANDO EL USUARIO SE REGISTRE SE REDIRECCIONARÁ AL LOGIN. 
      if(datosUsuario.length > 0 && datosLogin === null){
        //NAVEGACIÓN AL PERFIL PASAJERO.
        this.router.navigate(['/login']);
        
        return false;
      }else{

        if(datosLogin.logueado === 'true'){
          // REDIRECCIÓN A LOS PERFILES CORRESPONDIENTES A CADA USUARIO.
        if (datosUsuario.usuario === 'conductor'){
          // NAVEGACIÓN AL PERFIL CONDUCTOR.
          this.router.navigate(['/chofer']); 
        // POR EL CONTRARIO SE REDIRECCIONA AL PAGE PASAJERO  
        }else{
          if (datosUsuario.usuario === 'pasajero'){
          // NAVEGACIÓN AL PERFIL PASAJERO.
          this.router.navigate(['/pasajero']);
          }
         
        } 
          return false;
        }else{
          
          return true;
        }  
      
      }
      
  }
  
}
