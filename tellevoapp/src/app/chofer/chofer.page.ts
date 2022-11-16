import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MapsService } from '../services/maps.service';

import { DbService } from './../services/db.service';

//CREACIÓN DE INTERFAZ. 
// interface Seleccion {
//   value: string;
//   viewValue: string;
// }



@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {

  //**********CAPTURA DE DATOS.**********
  datos = {

    nombre: "",
    patente: "",
    capacidad: "",
    tarifa: "",
    disponible: true
    
  }
  //**********CAPTURA DE DATOS.**********
  //CAPTURACIÓN DE DATOS DEL SELECT.
  // selectedValue: string;
  // //ASIGNACIÓN DE VALORES Y DE OPCIONES A LA INTERFAZ SELECCIÓN PARA LUEGO SER IMPRESOS COMO OPCIONES EN SELECT CON LA FUNCIÓN *ngFor.
  // opciones: Seleccion[] = [
  //   {value: 'norte', viewValue: 'Norte'},
  //   {value: 'oriente', viewValue: 'Oriente'},
  //   {value: 'poniente', viewValue: 'Poniente'},
  //   {value: 'sur', viewValue: 'Sur'},
  // ];

  data: any;
  
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  bandera = {
    logueado: "true"
  }
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  

  constructor(private router: Router, private activeroute: ActivatedRoute, private map: MapsService, private database: DbService) { 

    // LLAMADO A LA RUTA ACTIVA
    this.activeroute.queryParams.subscribe(params => { 
      //VALIDACIÓN SI LA NAVEGACIÓN CONTIENE INFORMACIÓN EXTRAS
      if (this.router.getCurrentNavigation().extras.state) {
        //SI TIENE INFORMACIÓN EXTRAS SE CAPTURA LO ENVIADO.  
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        
      }
    });
  }

  //**********OBTENCIÓN DE LOS DATOS DEL ALUMNO EN LOCALSTORAGE.**********
  datosAlumno = JSON.parse(localStorage.getItem('alumno'));
  //ASIGNACIÓN DE NOMBRE DEL CONDUCTOR.
  conductor = ' ' + this.datosAlumno.primer_nombre + ' ' + this.datosAlumno.primer_apellido 
  /**********OBTENCIÓN DE LOS DATOS DEL ALUMNO EN LOCALSTORAGE.**********/
  datosConductor(){
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
    //SE PASA EL NOMBRE DEL CONDUCTOR AL ARREGLO.
    //LOS DATOS SE REPITEN EN LA BD, CONSULTAR POR PATENTE.
    this.datos.nombre = this.conductor;
    this.database.insertar("conductor", this.datos).then(() => {
      console.log('registro conductor guardado!');
      },(error) => {
      console.log("error al insertar los datos",error)
      });
    //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
    console.log(this.datos)
  }
  //**********FUNCIÓN LOGOUT.**********.
  salirPagina(){

    //OBTENCIÓN DE LA BANDERA CREADA EN LOGIN DE LOCALSTORAGE, ESTOS SE PARSEAN DE STRING A JSON.
    var datosLogin = JSON.parse(localStorage.getItem('login'));
    //ASIGNACIÓN DE VALOR FALSE A LA BANDERA DE LOCALSTORAGE
    datosLogin.logueado = 'false'
    //SE SOBREESCRIBE EL VALOR DE LA BANDERA PARA EJECUCIÓN DE LOG OUT.
    localStorage.setItem('login', JSON.stringify(datosLogin));
    //REDIRECCIÓN AL PAGE LOGIN.  
    this.router.navigate(['/home']);
  }
  //**********FUNCIÓN LOGOUT.**********.
  
    
  ngOnInit() {
    //**********GUARDADO DE BANDERA EN LOCALSTORAGE.**********
    localStorage.setItem('login', JSON.stringify(this.bandera));
    //**********GUARDADO DE BANDERA EN LOCALSTORAGE.**********
    //********** CARGADO DE MAPA AL INICIO DEL PAGE********** */
    this.map.loadMap();
    //********** CARGADO DE MAPA AL INICIO DEL PAGE.********** */
  }


}
