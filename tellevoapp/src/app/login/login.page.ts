import { Component, OnInit } from '@angular/core';
//SE IMPORTA ROUTER Y NAVIGATIONEXTRAS PARA HACER EL ENVÍO DE INFORMACIÓN HACIA OTRO PAGE.
import { Router, NavigationExtras } from '@angular/router';

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
    {value: 'transporte', viewValue: 'Programar viaje'},
    {value: 'movilizacion', viewValue: 'Solicitar Movilización'},
  ];
  
  //INICIALIZACIÓN DE OBJETO PARA CAPTURAR LOS DATOS INGRESADOS DEL USUARIO.
  datos = {

    nombre: "",
    contrasenia: "",
    usuario: "",
    
  }
  //CREACIÓN DE LA INSTANCIA ROUTER PARA REDIRECCIONAR A LOS PAGES.
  constructor(private router: Router) { }

  ngOnInit() {
  }
  //CREACIÓN DE FUNCIÓN QUE SE EJECUTARÁ AL MOMENTO DE PULSAR EL BOTÓN INGRESAR EN EL FORMULARIO, DICHA FUNCIÓN REDIRECCIONARÁ AL PAGE CORRESPONDIENTE Y ENVIARÁ EL NOMBRE DEL USUARIO.
  redirecionPage(){
    console.log(this.datos)
    let navigationExtras: NavigationExtras = {
      state: {
        //ASIGNACIÓN DE OBJETO CON CLAVE Y VALOR AL ESTADO.
        user: this.datos 
      }
    };
    //SI EL USUARIO SELECCIONA PROGRAMAR VIAJE, SE REDIRECCIONARÁ AL PAGE DE ARRIENDO
    if (this.selectedValue === 'transporte'){
      //NAVEGACIÓN AL PAGE ARRIENDO.
      this.router.navigate(['/transporte'],navigationExtras); 
    // POR EL CONTRARIO SE REDIRECCIONA AL PAGE MOVILIZACIÓN  
    }else{
      //NAVEGACIÓN AL PAGE MOVILIZACIÓN.
      this.router.navigate(['/movilizacion'],navigationExtras);
    }  
  }
  //FIN EXPORT CLASS.
}
