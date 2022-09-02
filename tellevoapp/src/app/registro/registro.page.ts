import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //CAPTURACIÓN DE DATOS.

  datos = {

    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    contrasenia: "",
    confirmarContrasenia: ""
  }
    
  //FUNCIÓN QUE ENVIARÁ LOS DATOS AL COMPONENT MOSTRAR INICIO DE INTERPOLACIÓN.
  mostrarDatos(){
    console.log("obteniendo datos")
    console.log(this.datos)      

  }
  //VALIDANDO CAMPOS.
  validarDatos(){

    if (this.datos.nombre === ""){

      return true;
    }
  }
  //********************************* VALIDACIONES ********************************* */
  //VALIDACIÓN EMAIL.
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //VALIDACIÓN NOMBRE.
  nombre = new FormControl('', [Validators.required]);

  getErrorNombre() {
    if (this.nombre.hasError('required')) {
      return 'Debes ingresar tu nombre';
    }

    // return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //VALIDACIÓN APELLIDO.
  apellido = new FormControl('', [Validators.required]);

  getErrorApellido() {
    if (this.apellido.hasError('required')) {
      return 'Debes ingresar tu apellido';
    }

    // return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //VALIDACIÓN USUARIO.
  usuario = new FormControl('', [Validators.required]);

  getErrorUsuario() {
    if (this.usuario.hasError('required')) {
      return 'Debes ingresar tu usuario';
    }

    // return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //VALIDACIÓN CONTRASEÑA.
  contrasenia = new FormControl('', [Validators.required]);

  getErrorContrasenia() {
    if (this.contrasenia.hasError('required')) {
      return 'Debes ingresar tu contrasenia';
    }

    // return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //VALIDACIÓN CONFIRMACIÓN CONTRASEÑA
  confirmarContrasenia = new FormControl('', [Validators.required]);

  getErrorConfirmarcontrasenia() {
    if (this.confirmarContrasenia.hasError('required')) {
      return 'Debes confirmar tu contrasenia';
    }

    // return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //***************************** SUBMIT ***************************************** */
  guardarDatos(){

    console.log(this.datos)
  }
  constructor() { }

  ngOnInit() {
  }

}
