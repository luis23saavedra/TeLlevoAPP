import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class DbService {

 
  constructor( public database: AngularFirestore ) {}
  //MÉTODO PARA INSERTAR LOS REGISTROS DE LOS USUARIOS EN LA BASE DE DATOS, RECIBE POR PARÁMETRO EL NOMBRE DE LA COLECCIÓN Y LOS DATOS A ALMACENAR.  
  public insertar(coleccion, datos) {
      return this.database.collection(coleccion).add(datos);
  }
  //MÉTODO QUE PERMITE OBTENER LOS DATOS ALMACENADOS POR COLECCIÓN.
  public consultar(colecccion) {
    return this.database.collection(colecccion).snapshotChanges();
  }
}
