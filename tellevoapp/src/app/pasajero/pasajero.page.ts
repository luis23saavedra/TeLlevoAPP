import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
//GEOLOCALIZACION Y GOOGLE MAPS
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
// import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

import { DbService } from './../services/db.service';
//CREACIÓN DE INTERFAZ.

interface Seleccion {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  //CAPTURACIÓN DE DATOS DEL SELECT.
  selectedValue: string;
  //ASIGNACIÓN DE VALORES Y DE OPCIONES A LA INTERFAZ SELECCIÓN PARA LUEGO SER IMPRESOS COMO OPCIONES EN SELECT CON LA FUNCIÓN *ngFor.
  opciones: Seleccion[] = [
    {value: 'norte', viewValue: 'Norte'},
    {value: 'oriente', viewValue: 'Oriente'},
    {value: 'poniente', viewValue: 'Poniente'},
    {value: 'sur', viewValue: 'Sur'},
  ];
  //**********CAPTURA DE DATOS.**********
  datos = {

    ruta: "",
    patente: "",
    modelo: ""
    
  }
  //**********CAPTURA DE DATOS.**********
  //CREACIÓN DE VARIABLE TIPO ANY, PERMITE CUALQUIER VALOR SE UTILIZARÁ PARA CAPTURAR LOS DATOS DESDE EL PAGE LOGIN.
  data: any;
  //**********BANDERA LOGIN LOCALSTORAGE.**********
  bandera = {
    logueado: "true"
  }
  //**********BANDERA LOGIN LOCALSTORAGE.********** 
  
  constructor(private router: Router, private activeroute: ActivatedRoute, private database: DbService, private geo: Geolocation) { 

    // LLAMADO A LA RUTA ACTIVA
    this.activeroute.queryParams.subscribe(params => { 
      //VALIDACIÓN SI LA NAVEGACIÓN CONTIENE INFORMACIÓN EXTRAS
      if (this.router.getCurrentNavigation().extras.state) {
        //SI TIENE INFORMACIÓN EXTRAS SE CAPTURA LO ENVIADO.  
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        
      }
    });

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
  }
  //POSISIONAMIENTO DEL CHECK BOX
  labelPosition: 'before' | 'after' = 'after';
  //SE ESCONDE LA EXPANSIÓN DEL PANEL POR DEFECTO.
  panelOpenState = false;
  //GEOLOZALIZACIÓN PASAJERO.
  geolocalizacion(){

    this.geo.getCurrentPosition().then((resp) =>{
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("localizacion: ", resp)
    }).catch((error) =>{
      console.log("Error al obtener la localizacion", error)
    });

    let watch = this.geo.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
    });
  }
  // @ViewChild('map') mapView: ElementRef;
  // CUANDO ELCICLO DE VIDA DEL PAGE ENTRE A SU FINALIZACIÓN
  // ionViewDidEnter() {
  //   this.createMap();
  // }
  //CREACIÓN MAPA.
  // createMap() {
  //   const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;

  //   CapacitorGoogleMaps.create({
  //     width: Math.round(boundingRect.width),
  //     height: Math.round(boundingRect.height),
  //     x: Math.round(boundingRect.x),
  //     y: Math.round(boundingRect.y),
  //     zoom: 5
  //   });

//   CapacitorGoogleMaps.addListener('onMapReady', async () => {
//     CapacitorGoogleMaps.setMapType({
//       type: "normal" // hybrid, satellite, terrain
//     });

//     this.showCurrentPosition();
//   });
// }

// async showCurrentPosition() {
//   // todo
// }
//CUANDO EL CICLO DE VIDA DEL PAGE FINALIZA.
// ionViewDidLeave() {
//   CapacitorGoogleMaps.close();
// }

}
