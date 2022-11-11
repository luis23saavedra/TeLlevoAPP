import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogRegPage } from '../dialog-reg/dialog-reg.page';

import { ApiService } from '../api.service';

import { DbService } from './../services/db.service';

import {getAuth, GoogleAuthProvider } from "firebase/auth";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //**********CAPTURA DE DATOS.**********
    datos = {
  
      email: "",
      contrasenia: ""
      
    }
  //**********CAPTURA DE DATOS.**********
  constructor(public dialog: MatDialog, private data: ApiService, private database: DbService) {}
  
  //**********DIALOG ANIMATION**********/  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogRegPage, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    
  }
  //**********DIALOG ANIMATION**********/ 
  //**********AUTENTICACIÓN FIREBASE GOOGLE */
  provider = new GoogleAuthProvider();
  //**********AUTENTICACIÓN FIREBASE GOOGLE */
  ngOnInit(){
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
    //CONSULTA DE LOS DATOS A LA BD.
    this.database.consultar("conductor").subscribe((conductor => {
      //SI EXISTEN DATOS EN LA COLECCIÓN CONDUCTOR NO INSERTARÁ LOS DATOS, EN CASO CONTRARIO REALIZA EL INSERT.
      if (conductor.length > 0){
        console.log("existe la tabla conductor")
        
      }else{
        this.data.registroConductor().subscribe((data) => {
          this.database.insertar("conductor", data).then(() => {
          console.log('registro guardado!');
          },(error) => {
          console.log(error)
          });
          })
      }
    }))
    //SE REALIZA EL MISMO PASO ANTERIOR.
    this.database.consultar("pasajero").subscribe((pasajero => {

      if(pasajero.length > 0){
        console.log("colecion pasajeros existe")
      }else{  
          this.data.registroPasajero().subscribe((data) => {
          this.database.insertar("pasajero", data).then(() => {
            console.log('registro guardado!');
          },(error) => {
            console.log(error)
          });
          })
      }  
    }))
    
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
  }

}
