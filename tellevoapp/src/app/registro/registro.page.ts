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
    email: "",
    contrasenia: "",
    confirmarContrasenia: ""
  }
  //********************************* VALIDACIONES ********************************* */
  //VALIDACIÓN EMAIL.
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar tu correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo electrónico inválido' : '';
  }
  //VALIDACIÓN CONTRASEÑA.
  contador : number;
  getConfirmaContrasenia() {
    if (this.datos.contrasenia === this.datos.confirmarContrasenia) {
      contador : 1
      console.log("Está entrando al metodo")
      return 'Las contraseñas no coinciden';
      
      
    }

  }
  //***************************** SUBMIT ***************************************** */
  guardarDatos(){

    console.log(this.datos)
  }
  constructor() { }

  ngOnInit() {
  }

}
