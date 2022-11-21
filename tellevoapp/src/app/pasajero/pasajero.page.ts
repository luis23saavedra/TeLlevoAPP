import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MapsService } from '../services/maps.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

import { DbService } from './../services/db.service';

// import { ApiService } from '../api.service';

//CREACIÓN DE INTERFAZ.
 interface PeriodicElement {
  Capacidad: number;
  Conductor: string;
  Tarifa: number;
}

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
 
  //**********CAPTURA DE DATOS.**********
  datos = {

    direccion: "",
    
  }
  //**********CAPTURA DE DATOS.**********
  //CREACIÓN DE VARIABLE TIPO ANY, PERMITE CUALQUIER VALOR SE UTILIZARÁ PARA CAPTURAR LOS DATOS DESDE EL PAGE LOGIN.
  data: any;
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  bandera = {
    logueado: "true"
  }
  //**********BANDERA LOGIN LOCALSTORAGE.********** 
  
  constructor(private router: Router, private activeroute: ActivatedRoute, private database: DbService, private map: MapsService ) { 

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
  
  pasajero = ' ' + this.datosAlumno.primer_nombre + ' ' + this.datosAlumno.primer_apellido 
  /**********OBTENCIÓN DE LOS DATOS DEL ALUMNO EN LOCALSTORAGE.**********/
  //**********TABLA DATOS CONDUCTOR********* */
  //ASIGNACIÓN DE COLUMNAS
  displayedColumns: string[] = ['conductor','Patente', 'Capacidad', 'Tarifa', 'check'];
  //SE ESTABLECE VACÍO, LA INFORMACIÓN SE CARGA EN EL MÉTODO datosBdConductor().
  dataSource = new MatTableDataSource([]);
  //SELECCIÓN DEL CHECKBOX.
  selection = new SelectionModel(false, []);
  //CREACIÓN DE PAGINATOR.
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Conductor + 1}`;
  }
  //**********TABLA DATOS CONDUCTOR********* */
  //**********OBTENCIÓN DE DATOS EN LA BD PARA SER PASADOS AL DATASOURCE********* */
  datosBdConductor(){
    //LLAMADO AL MÉTODO QUE OBTIENE LOS DATOS DEL CONDUCTOR DE LA BD PARA LUEGO ASIGNARLOS AL DATASOURCE. 
    this.database.consultarConductor("conductor").subscribe(resp => {
      this.dataSource.data = resp;
    })

  }
   //**********OBTENCIÓN DE DATOS EN LA BD PARA SER PASADOS AL DATASOURCE********* */
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
    //********** CARGADO DE MAPA AL INICIO DEL PAGE********** */
    //**********CARGADO DE CONDUCTORES EN LA TABLA**********
    this.datosBdConductor();
    //**********CARGADO DE CONDUCTORES EN LA TABLA**********
  }
  
}
