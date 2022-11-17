import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore'
//MÓDULOS CREACIÓN DE USUARIOS.
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Observable } from 'rxjs';

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
  async insertarConductor(coleccion, documento, datos) {
    const res = await this.database.collection(coleccion).doc(documento).set(datos);
    
    console.log("conductor agregado")
      
  }
  //MÉTODO QUE PERMITE OBTENER LOS DATOS ALMACENADOS POR COLECCIÓN.
  public consultar(colecccion){
    return this.database.collection(colecccion).snapshotChanges();
  }

  //MÉTODO QUE OBTIENE LOS DATOS DE LOS CONDUCTORES QUE SU ATRIBUTO DISPONIBLE SEA TRUE.
  consultarConductor(coleccion){
    const consulta = this.database.collection(coleccion, ref => ref.where('disponible', '==', true));
    //VALUECHANGES PERMITE HACER AL MÉTODO UN OBSERVABLE, ESTÁ ATENTO A LOS CAMBIOS EN LA COLECCIÓN.
    return consulta.valueChanges()
    
  }
  //ACTUALIZACIÓN DE LA DISPONIBILIDAD DEL CONDUCTOR.
  modificarDisponibilidad(coleccion, documento, disponibilidad){
    const consulta = this.database.collection(coleccion).doc(documento).update({ 
      disponible: disponibilidad
    })
    return consulta
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
