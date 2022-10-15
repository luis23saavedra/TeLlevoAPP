import { Component, OnInit } from '@angular/core';
//SE IMPORTA ROUTER Y NAVIGATIONEXTRAS PARA HACER EL ENVÍO DE INFORMACIÓN HACIA OTRO PAGE.
import { Router, NavigationExtras } from '@angular/router';

import { AlertController } from '@ionic/angular';

//CREACIÓN DE INTERFAZ. 
interface Seleccion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  //CAPTURACIÓN DE DATOS DEL SELECT.
  selectedValue: string;
  //ASIGNACIÓN DE VALORES Y DE OPCIONES A LA INTERFAZ SELECCIÓN PARA LUEGO SER IMPRESOS COMO OPCIONES EN SELECT CON LA FUNCIÓN *ngFor.
  opciones: Seleccion[] = [
    {value: 'chofer', viewValue: 'Programar viaje'},
    {value: 'pasajero', viewValue: 'Solicitar Movilización'},
  ];
  
  //INICIALIZACIÓN DE OBJETO PARA CAPTURAR LOS DATOS INGRESADOS DEL USUARIO.
  datos = {

    rut: "",
    contrasenia: "",
    usuario: "",
    
  }
  //CREACIÓN DE LA INSTANCIA ROUTER PARA REDIRECCIONAR A LOS PAGES.
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  //CREACIÓN DE FUNCIÓN QUE SE EJECUTARÁ AL MOMENTO DE PULSAR EL BOTÓN INGRESAR EN EL FORMULARIO, DICHA FUNCIÓN REDIRECCIONARÁ AL PAGE CORRESPONDIENTE Y ENVIARÁ EL NOMBRE DEL USUARIO.
  async redirecionPage(){
    //OBTENCIÓN DE LOS DATOS ALMACENADOS EN LOCALSTORAGE, ESTOS SE PARSEAN DE STRING A JSON.
    var datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    //SI EL RUT Y LA CONTRASEÑA ALMACENADAS SON IGUALES A LO INGRESADO SE REDIRECCIONA AL PAGE CORRESPONDIENTE. 
    if (datosUsuario.rut === this.datos.rut && datosUsuario.contrasenia === this.datos.contrasenia){
      //LA CLASE NAVIGATIONEXTRAS PERMITE NAVEGAR AL PAGE CORRESPONDIENTE DEL USUARIO. 
      let navigationExtras: NavigationExtras = {
        state: {
          //ASIGNACIÓN DE OBJETO CON CLAVE Y VALOR AL ESTADO.
          user: this.datos 
        }
      };
      //GUARDADO DE BANDERA EN LOCALSTORAGE.
      localStorage.setItem('login','true');
      //REDIRECCIÓN A LOS PERFILES CORRESPONDIENTES A CADA USUARIO.
      if (datosUsuario.usuario === 'conductor'){
        //NAVEGACIÓN AL PERFIL CONDUCTOR.
        this.router.navigate(['/chofer'],navigationExtras); 
      // POR EL CONTRARIO SE REDIRECCIONA AL PAGE MOVILIZACIÓN  
      }else{
        if (datosUsuario.rut === 'pasajero'){
        //NAVEGACIÓN AL PERFIL PASAJERO.
        this.router.navigate(['/pasajero'],navigationExtras);
        }
       
      }  

    }else{
      //SI LOS DATOS INGRESADOS SON INCORRECTOS SE MOSTRARÁ UNA ALERTA.
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        subHeader: '',
        message: 'Sus datos son incorrectos, por favor vuelva a ingresarlos.',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
     
  }
  //FIN EXPORT CLASS.
}
