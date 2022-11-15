import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MapsService } from '../services/maps.service';

// import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

import { DbService } from './../services/db.service';

// import { ApiService } from '../api.service';

//VARIABLE GOOGLE PARA INICIALIZAR EL MAPA.
declare var google;
//CREACIÓN DE INTERFAZ.

interface Seleccion {
  value: string;
  viewValue: string;
}
//CREAR INTERFACE  PARA ESTABLECER LA LATITUD Y LONGITUD, CREAR EN LA CARPETA DE SERVICIO.
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
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
  // //VARIABLE QUE CONTRIBUYE A LA CREACIÓN DE MAPS
  // map = null
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
  //**********GOOGLE MAPS********** */
  // loadMap() {
    
  //   // CREACIÓN DE MAPA EN LA ETIQUETA HTML.
  //   const mapEle: HTMLElement = document.getElementById('map');
  //   // CREACIÓN DE LA LATITUD Y LONGITUD.
  //   const myLatLng = {lat: -33.59826, lng: -70.57926};
  //   // CREACIÓN DE MAPA.
  //   this.map = new google.maps.Map(mapEle, {
  //     center: myLatLng,
  //     zoom: 12
  //   });
  //   //
  //   google.maps.event.addListenerOnce(this.map, 'idle', () => {
  //     // this.renderMarkers();
  //     mapEle.classList.add('show-map');
  //     //SE ESTABLECE LA POSICIÓN INICIAL EN EL MAPA.
  //     const marker = {
  //       position: {
  //         lat: -33.59826,
  //         lng: -70.57926
  //       },
  //       title: 'Punto Partida'
  //     }
  //     //LLAMADO AL MÉTODO PARA ESTABLECER EL PUNTO DE PARTIDA
  //     this.addMarker(marker);
  //   });
  // }
  // //SE AGREGA LA POSICIÓN INICIAL.
  // addMarker(marker: Marker) {
  //   return new google.maps.Marker({
  //     position: marker.position,
  //     map: this.map,
  //     title: marker.title
  //   });
  // }
  //**********GOOGLE MAPS********** */  
  ngOnInit() {
    //**********GUARDADO DE BANDERA EN LOCALSTORAGE.**********
    localStorage.setItem('login', JSON.stringify(this.bandera));
    //**********GUARDADO DE BANDERA EN LOCALSTORAGE.**********
    //********** CARGADO DE MAPA AL INICIO DEL PAGE********** */
    this.map.loadMap();
    //********** CARGADO DE MAPA AL INICIO DEL PAGE********** */
  }
  
  //POSISIONAMIENTO DEL CHECK BOX
  labelPosition: 'before' | 'after' = 'after';
  //SE ESCONDE LA EXPANSIÓN DEL PANEL POR DEFECTO.
  panelOpenState = false;
  //GEOLOZALIZACIÓN PASAJERO.
  
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
