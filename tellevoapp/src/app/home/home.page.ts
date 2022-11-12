import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogRegPage } from '../dialog/dialog-reg/dialog-reg.page';

import { DialogErrorLoginPage } from '../dialog/dialog-error-login/dialog-error-login.page';

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
    //INSERT DE REGISTRO
    // this.database.registrar(this.datos.email, this.datos.contrasenia)
    // .then(
    //   //RESPUESTA AL SER UNA PROMESA.
    //   response => {
    //     console.log("Registro insertado")
    //   }
    // ).catch(error => console.log("Error al insertar el registro"));
    //VERIFICACIÓN DE LOS DATOS DEL USUARIO
    this.database.login(this.datos.email, this.datos.contrasenia)
    .then(
      //RESPUESTA AL SER UNA PROMESA, SI LOS DATOS SON VÁLIDOS SE MUESTRA LA ANIMACIÓN.
      response => {
        
        this.dialog.open(DialogRegPage, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
        console.log("Login con exito")
      }  
    ).catch(error => {
      
      this.dialog.open(DialogErrorLoginPage, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
      console.log("Error en los datos de ingreso")
    });

    // this.dialog.open(DialogRegPage, {
    //   width: '250px',
    //   enterAnimationDuration,
    //   exitAnimationDuration,
    // });
    
  }
  //**********DIALOG ANIMATION**********/
  
   //**********AUTENTICACIÓN FIREBASE GOOGLE */
  provider = new GoogleAuthProvider();
  //**********AUTENTICACIÓN FIREBASE GOOGLE */
  ngOnInit(){
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
    //CONSULTA DE LOS DATOS A LA BD.
    this.database.consultar("alumnos").subscribe((alumnos => {
      //SI EXISTEN DATOS EN LA COLECCIÓN CONDUCTOR NO INSERTARÁ LOS DATOS, EN CASO CONTRARIO REALIZA EL INSERT.
      if (alumnos.length > 0){
        console.log("existe la tabla alumnos")
        
      }else{
        this.data.registroAlumnos().subscribe((data) => {
          this.database.insertar("alumnos", data).then(() => {
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
