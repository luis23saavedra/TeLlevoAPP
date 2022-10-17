import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

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
  
  //INICIALIZACIÓN DE OBJETO PARA CAPTURAR LOS DATOS INGRESADOS DEL USUARIO.
  datos = {

    ruta: "",
    patente: "",
    modelo: ""
    
  }
  //CREACIÓN DE VARIABLE TIPO ANY, PERMITE CUALQUIER VALOR SE UTILIZARÁ PARA CAPTURAR LOS DATOS DESDE EL PAGE LOGIN.
  data: any; 
  
  constructor(private router: Router, private activeroute: ActivatedRoute, private geo: Geolocation) { 

    // LLAMADO A LA RUTA ACTIVA
    this.activeroute.queryParams.subscribe(params => { 
      //VALIDACIÓN SI LA NAVEGACIÓN CONTIENE INFORMACIÓN EXTRAS
      if (this.router.getCurrentNavigation().extras.state) {
        //SI TIENE INFORMACIÓN EXTRAS SE CAPTURA LO ENVIADO.  
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        
      }
    });

  }

  ngOnInit() {
  }

  
  redirecionPage(){
    // // console.log(this.datos)
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     //ASIGNACIÓN DE OBJETO CON CLAVE Y VALOR AL ESTADO.
    //     user: this.datos 
    //   }
    // };

    this.redirecionPage()
    
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

}
