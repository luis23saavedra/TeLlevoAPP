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
