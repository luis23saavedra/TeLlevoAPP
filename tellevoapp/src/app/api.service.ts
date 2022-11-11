import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  //**********OBTENCIÓN DE DATOS DESDE API EXTERNA.**********
  consultaDatos():Observable<Usuarios[]>{
    
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users' ).pipe(retry(3))
  }
  //**********OBTENCIÓN DE DATOS DESDE API EXTERNA.**********
  //**********OBTENCIÓN DE DATOS DESDE API LOCAL.**********
  registroConductor(): Observable<any>{

    return this.http.get<any>('assets/json/conductor.json' )

  }

  registroPasajero(): Observable<any>{

    return this.http.get<any>('assets/json/pasajero.json' )

  }
  //**********OBTENCIÓN DE DATOS DESDE API LOCAL.**********
  
}
