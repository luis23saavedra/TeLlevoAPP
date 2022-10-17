import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
// import { Address, Company, Usuarios } from './interfaces/interfaces';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
//CREACIÓN DE INTERFAZ PARA ASIGNAR EL TIPO DE DATO DE LA INFORMACIÓN OBTENIDA EN API REST. 
export interface Usuarios {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  string;
  phone:    string;
  website:  string;
  company:  string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor( private http: HttpClient) { }
  //OBSERVABLE
  consultaDatos():Observable<Usuarios[]>{
    //OBTENCIÓN DE DATOS DESDE API REST.
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users' ).pipe(retry(3))
  }

  
}
