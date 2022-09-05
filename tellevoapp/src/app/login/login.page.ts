import { Component, OnInit } from '@angular/core';
//SE IMPORTA ROUTER Y NAVIGATIONEXTRAS PARA HACER EL ENVÍO DE INFORMACIÓN HACIA OTRO PAGE.
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //CREACIÓN DEL ARREGLO PARA CAPTURAR LOS DATOS DEL USUARIO.
  datos = {

    nombre: "",
    contrasenia: "",
    
  }
  //CREACIÓN DE LA INSTANCIA ROUTER PARA PERMITIR EL ENVÍO DE LA INFORMACIÓN.
  constructor(private router: Router) { }

  ngOnInit() {
  }
  //CREACIÓN DE FUNCIÓN QUE SE EJECUTARÁ AL MOMENTO DE HACER SUBMIT EN EL FORMULARIO.
  onSubmitTemplate(){
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.datos // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }
  //FIN EXPORT CLASS.
}
