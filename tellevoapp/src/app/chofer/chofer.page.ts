import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MapsService } from '../services/maps.service';

import { DbService } from './../services/db.service';

import { DialogCancelarViajePage } from '../dialog/dialog-cancelar-viaje/dialog-cancelar-viaje.page';
import { MatDialog } from '@angular/material/dialog';


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
  

  constructor(private router: Router, private activeroute: ActivatedRoute, private map: MapsService, private database: DbService, public dialog: MatDialog) { 

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
  //ASIGNACIÓN ID DOCUMENTO DE LA COLECCIÓN CONDUCTOR. 
  conductorDocumento = this.datosAlumno.primer_nombre + '_' + this.datosAlumno.primer_apellido
  //IMPRESIÓN NOMBRE CONDUCTOR
  conductor = ' ' + this.datosAlumno.primer_nombre + ' ' + this.datosAlumno.primer_apellido 
  /**********OBTENCIÓN DE LOS DATOS DEL ALUMNO EN LOCALSTORAGE.**********/

  //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********
  desactivarInputs(){
    document.getElementById('patente').setAttribute('disabled', '')
    document.getElementById('capacidad').setAttribute('disabled', '')
    document.getElementById('tarifa').setAttribute('disabled', '')
    document.getElementById('iniciar').setAttribute('disabled', '')
  }
  activatInputs(){
    document.getElementById('patente').removeAttribute('disabled')
    document.getElementById('capacidad').removeAttribute('disabled')
    document.getElementById('tarifa').removeAttribute('disabled')
    document.getElementById('iniciar').removeAttribute('disabled')
  }
  datosConductor(){
    //ASIGNACIÓN NOMBRE CONDUCTOR.
    this.datos.nombre = this.datosAlumno.primer_nombre + ' ' + this.datosAlumno.primer_apellido 
    this.database.insertarConductor("conductor",this.conductorDocumento,this.datos);
    this.desactivarInputs();
    
    this.database.consultarConductor("conductor").subscribe(resp =>{
      console.log(resp)
    })
    
  }
  //MÉTODO QUE CAMBIA LA DISPONIBILIDAD DEL CONDUCTOR.
  cancelarViaje(enterAnimationDuration: string, exitAnimationDuration: string): void{
    //AL MOMENTO DE CANCELAR EL VIAJE DISPONIBLE TOMA EL VALOR DE FALSE.
    this.dialog.open(DialogCancelarViajePage, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    
    this.datos.disponible = false;

    this.database.modificarDisponibilidad("conductor", this.conductorDocumento, this.datos.disponible).then(resp => {
      console.log("registro modificado")
    })
    //SE RESTABLECE EL VALOR PREDETERMINADO
    this.datos.disponible = true;
    this.activatInputs()

  }
  //**********ALMACENAMIENTO DE LOS DATOS EN LA BD.**********

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
