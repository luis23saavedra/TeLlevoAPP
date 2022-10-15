import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogueadoGuard implements CanActivate {
  //CREACIÓN DE CONSTRUCTOR PARA LA UTILIZACIÓN DE LA CLASE ROUTER.
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //SI EN LOCALSTORAGE ESTÁ LOGUEADO RETORNARÁ TRUE.  
    if(localStorage.getItem('login')){
      return true;
    }else{
      //EN CASO DE NO ESTAR LOGUEADO REDIRIGIRÁ AL LOGIN.
      let navigationExtras: NavigationExtras = {};
      this.router.navigate(['/login'],navigationExtras); 
      return false;
    }
      
  }
  
}
