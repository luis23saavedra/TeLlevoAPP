import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

//CREACIÓN DE INTERFAZ. 
interface Seleccion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
   //CAPTURACIÓN DE DATOS DEL SELECT.
   selectedValue: string;
   //ASIGNACIÓN DE VALORES Y DE OPCIONES A LA INTERFAZ SELECCIÓN PARA LUEGO SER IMPRESOS COMO OPCIONES EN SELECT CON LA FUNCIÓN *ngFor.
   opciones: Seleccion[] = [
     {value: 'conductor', viewValue: 'Conductor'},
     {value: 'pasajero', viewValue: 'Pasajero'},
     
   ];
  //CAPTURACIÓN DE DATOS.
    
   datos = {

    nombre: "",
    apellido: "",
    rut: "",
    usuario: "",
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
      
      return 'Las contraseñas no coinciden';
      
      
    }

  }
   //ALERTA
  async presentAlert() {
    //LOCALSTORAGE
    //GUARDADO DE DATOS DESDE EL OBJETOS DATOS, SE CONVIERTEN LOS DATOS EN TIPO STRING PARA SER ACEPTADOS COMO PARÁMETRO, PUEDEN SER OBSERVADOS DESDE EL NAVEGADOR.
    localStorage.setItem('usuario', JSON.stringify(this.datos));

    const alert = await this.alertController.create({
      header: 'Registro Guardado',
      subHeader: '',
      message: 'Su registro ha sido guardado con éxito,redireccionando a iniciar sesión',
      buttons: ['OK'],
    });

    await alert.present();
  }
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  

}
