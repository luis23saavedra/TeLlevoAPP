import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoLogueadoGuard implements CanActivate {
  //CREACIÓN DE CONSTRUCTOR PARA LA UTILIZACIÓN DE LA CLASE ROUTER.
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //SI EL ITEM LOGIN EXISTE EN LOCALSTORAGE, SE REDIRIGE AL PERFIL CORRESPONDIENTE.
      if(localStorage.getItem('login')){
        
        let navigationExtras: NavigationExtras = {};
        //OBTENCIÓN DE LOS DATOS ALMACENADOS EN LOCALSTORAGE, ESTOS SE PARSEAN DE STRING A JSON.
        var datosUsuario = JSON.parse(localStorage.getItem('usuario'));
        //REDIRECCIÓN A LOS PERFILES CORRESPONDIENTES A CADA USUARIO.
      if (datosUsuario.usuario === 'conductor'){
        //NAVEGACIÓN AL PERFIL CONDUCTOR.
        this.router.navigate(['/chofer'],navigationExtras); 
      // POR EL CONTRARIO SE REDIRECCIONA AL PAGE MOVILIZACIÓN  
      }else{
        if (datosUsuario.usuario === 'pasajero'){
        //NAVEGACIÓN AL PERFIL PASAJERO.
        this.router.navigate(['/pasajero'],navigationExtras);
        }
       
      } 
        return false;
      }else{
        return true;
      }  
    
  }
  
}
