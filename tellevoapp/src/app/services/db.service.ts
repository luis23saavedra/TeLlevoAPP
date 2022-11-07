import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Database} from './database'
import { HttpClient } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DbService {

 
  constructor(
    // private platform: Platform, 
    // private sqlite: SQLite,
    // private storage: SQLiteObject, 
    // private httpClient: HttpClient,
   
  ) {
    //CREACIÓN DE BASE DE DATOS.
  //   this.sqlite.create({
  //     name: 'tellevoapp.db',
  //     location : 'default'
  //   }).then((db : SQLiteObject) => {
  //     console.log('Base de datos creada');
  //     db.executeSql('CREATE TABLE IF NOT EXISTS CHOFER(RUT VARCHAR(11) PRIMARY KEY AUTOINCREMENT, NOMBRE VARCHAR(20), APELLIDO VARCHAR(20), TIPO_USUARIO VARCHAR(15), CORREO_ELECTRONICO VARCHAR(30), CONTRASENIA INTEGER(5), CONFIRMAR_CONTRASENIA INTEGER(5))', []).then(() => {
  //       console.log('Tabla chofer creada');
  //     }).catch(e => {
  //       console.log('Tabla erronea')
  //     })
  //   }).catch(e => {
  //     console.log('Base de datos no creada')
  //   })
   
  // }
 
  // almacenarUsuario(rut, nombre, apellido, tipo_usuario, correo_electrónico, contrasenia, confirmar_contrasenia){

  //   this.sqlite.create({
  //     name: 'tellevoapp.db',
  //     location : 'default'
  //   }).then((db: SQLiteObject) => {
  //     // console.log('Base de datos creada');
  //     db.executeSql('INSERT INTO CHOFER VALUES(?,?,?,?,?,?,?)', [rut, nombre, apellido, tipo_usuario, correo_electrónico, contrasenia, confirmar_contrasenia]).then(() => {
  //       // console.log('usuario almacenado');
  //     }).catch(e => {
  //       // console.log('usuario no almacenado')
  //     })
  //   }).catch(e => {
  //     // console.log('Base de datos no creada')
  //   })

  }
}
