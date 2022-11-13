import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { DialogRegPage } from '../dialog/dialog-reg/dialog-reg.page';
import { DialogErrorLoginPage } from '../dialog/dialog-error-login/dialog-error-login.page';
import { DialogErrorContraseniaPage } from '../dialog/dialog-error-contrasenia/dialog-error-contrasenia.page';


import { ApiService } from '../api.service';

import { DbService } from './../services/db.service';

import {getAuth, GoogleAuthProvider } from "firebase/auth";

import { Router, NavigationExtras } from '@angular/router';

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
  alumnos = {
    
  }
  navegacion = {

  }
  //**********CAPTURA DE DATOS.**********
  //**********BANDERAS LOGIN***********/
  existe = 0;
  ingreso = 0;
  contrasenia = 0;
  //**********BANDERAS LOGIN***********/
  constructor(public dialog: MatDialog, private api: ApiService, private database: DbService, private router: Router) {}

  // envioDatos(datos: any){

  //   return datos

  // }
  //**********REGISTRO Y VALIDACIÓN DE ALUMNO**********/  
  registroValidacion(enterAnimationDuration: string, exitAnimationDuration: string): void {
    //LLAMADO AL SERVICIO API, CONTIENE LOS ALUMNOS ALMACENADOS EN LA BD, LA VARIABLE DATA ALMACENA ESTOS DATOS.
    this.api.registroAlumnos().subscribe((data) => {
      //RECORRIDO DE LA API CON FOR EACH, DATA CONTIENE LOS DATOS ALMACENADOS EN LA API
      data.forEach(x => {
        //SI EL EMAIL Y LA CONTRASEÑA COINCIDEN SE AUMENTA LA BANDERA EN 1.
        if (this.datos.email === x.email && this.datos.contrasenia === x.contrasenia){
          this.ingreso = 1;
        }else{
          //SI EL EMAIL ES CORRECTO PERO NO LA CONTRASEÑA.
          if (this.datos.email === x.email && this.datos.contrasenia != x.contrasenia){
            this.contrasenia = 1;
          }
        }
        // //SI EL EMAIL EXISTE EN LA BD.
        if ( this.datos.email === x.email ){
          this.existe = 1;
          this.navegacion = x;
        }
      });
      //SI LAS CREDENCIALES SON CORRECTAS Y EXISTE EL ALUMNO.
      if (this.ingreso === 1 && this.existe === 1){
        //**********GUARDADO DATOS DEL ALUMNO EN LOCALSTORAGE.**********/
        localStorage.setItem('alumno', JSON.stringify(this.navegacion));
        //**********GUARDADO DATOS DEL ALUMNO EN LOCALSTORAGE.**********/
        // VERIFICACIÓN DE LOS DATOS DEL USUARIO.
          console.log("usuario encontrado en la base de datos.")
          this.database.login(this.datos.email, this.datos.contrasenia)
          .then(
            //RESPUESTA AL SER UNA PROMESA, SI LOS DATOS SON VÁLIDOS SE MUESTRA LA ANIMACIÓN QUE PERMITE LA SELECCIÓN DE USUARIO.
            response => {
              console.log("el usuario ya se encuentra registrado.")
              this.dialog.open(DialogRegPage, {
                width: '250px',
                enterAnimationDuration,
                exitAnimationDuration,
                
              });
            },
              
          ).catch(error => {
            // SI EL USUARIO NO ESTÁ REGISTRADO SE REALIZA EL INSERT DEL REGISTRO.
            console.log("el usuario no se encuentra registrado.")
            this.database.registrar(this.datos.email, this.datos.contrasenia)
            .then(
              //RESPUESTA AL SER UNA PROMESA.
              response => {
                console.log("Registro insertado")
                //SE MUESTRA LA ANIMACIÓN PARA LA SELECCIÓN DE USUARIO AL ALUMNO PREVIAMENTE REGISTRADO.  
                this.dialog.open(DialogRegPage, {
                  width: '250px',
                  enterAnimationDuration,
                  exitAnimationDuration,
                });
              }
            ).catch(error => console.log("Error al insertar el registro"));
            
          });
          //SE RESTABLECEN LOS VALORES A 0 DE LAS BANDERAS.
          this.existe = 0;
          this.ingreso = 0;
      }else{
        //SI EL USUARIO NO EXISTE EN LA BD.
        if (this.existe === 0){
          this.dialog.open(DialogErrorLoginPage, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
          });
        }else{
          //SI LA CONTRASEÑA INGRESADA ES ERRÓNEA.
          if (this.contrasenia === 1){
            this.dialog.open(DialogErrorContraseniaPage, {
              width: '250px',
              enterAnimationDuration,
              exitAnimationDuration,
            });
            //SE RESTABLECEN LOS VALORES A 0 DE LAS BANDERAS.
            this.contrasenia = 0;
            this.existe = 0;
          }
        }
      }
     
    })

  }
  //**********REGISTRO Y VALIDACIÓN DE ALUMNO**********/
  
   //**********AUTENTICACIÓN FIREBASE GOOGLE */
  provider = new GoogleAuthProvider();
  //**********AUTENTICACIÓN FIREBASE GOOGLE */
  ngOnInit(){
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
    //CONSULTA DE LOS DATOS A LA BD.
    this.database.consultar("alumnos").subscribe((alumnos => {
      //SI EXISTEN DATOS EN LA COLECCIÓN CONDUCTOR NO INSERTARÁ LOS DATOS, EN CASO CONTRARIO REALIZA EL INSERT.
      if (alumnos.length > 0){
        // console.log("existe la tabla alumnos")
        return ""
        
      }else{
        this.api.registroAlumnos().subscribe((data) => {
          //RECORRIDO DE LA API CON FOR EACH, DATA CONTIENE LOS DATOS ALMACENADOS EN LA API
          data.forEach(x => {
            //ASIGNACIÓN DE LA INFORMACIÓN AL OBJETO ALUMNOS.
            this.alumnos = x
            this.database.insertar("alumnos", this.alumnos).then(() => {
              console.log('registro guardado!');
              },(error) => {
              console.log("error al insertar los datos",error)
              });
          });
          
        })
      }
    }))

    
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
  }

}
