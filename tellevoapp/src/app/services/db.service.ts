import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore'
//MÓDULOS CREACIÓN DE USUARIOS.
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  //VARIABLE QUE CONTIENE LA CLASE AUTH PARA HACER EL REGISTRO DEL USUARIO.
  auth = getAuth();
  constructor( public database: AngularFirestore ) {}
  //MÉTODO PARA INSERTAR LOS REGISTROS DE LOS USUARIOS EN LA BASE DE DATOS, RECIBE POR PARÁMETRO EL NOMBRE DE LA COLECCIÓN Y LOS DATOS A ALMACENAR.  
  public insertar(coleccion, datos) {
      return this.database.collection(coleccion).add(datos);
  }
  //MÉTODO QUE PERMITE OBTENER LOS DATOS ALMACENADOS POR COLECCIÓN.
  public consultar(colecccion) {
    return this.database.collection(colecccion).snapshotChanges();
  }
  //MÉTODO QUE REGISTRA AL USUARIO CON SU EMAIL Y CONTRASEÑA.
  public registrar(email, password){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  //MÉTODO QUE VALIDA LOS DATOS DEL USUARIO CON SU EMAIL Y CONTRASEÑA.
  login(email, password){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
