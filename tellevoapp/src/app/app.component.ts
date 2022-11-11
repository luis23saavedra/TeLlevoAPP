import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  bandera = {
    logueado: "S/D"
  }
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  constructor() {}
  ngOnInit() {
    //**********GUARDADO DE BANDERA EN LOCALSTORAGE.**********
    //INICIALIZACIÓN DE LOCALSTORAGE, EL USUARIO INICIALIZA SIN DATOS (S/D).
    localStorage.setItem('login', JSON.stringify(this.bandera));
    //**********GUARDADO DE BANDERA EN LOCALSTORAGE.**********
   
  }
  
}
