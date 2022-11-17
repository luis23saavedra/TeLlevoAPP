import { Injectable } from '@angular/core';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { LoadingController } from '@ionic/angular';

//VARIABLE GOOGLE PARA INICIALIZAR EL MAPA.
declare var google;

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  //VARIABLE QUE CONTRIBUYE A LA CREACIÓN DE MAPS
  map = null;
  
  puntoInicio = {
    lat: -33.59841,
    lng: -70.57911
  }
  
  constructor(private geo: Geolocation, private loadingCtrl: LoadingController) { }

  //**********GOOGLE MAPS********** */
  //OBTENCIÓN DE LA POSICIÓN DEL USUARIO.
  async geolocalizacion(){
    //AWAIT REEMPLAZA AL THEN Y CATCH.
    const rta = await this.geo.getCurrentPosition();
      return {
        lat: rta.coords.latitude,
        lng: rta.coords.longitude
      };
    
    };

    // let watch = this.geo.watchPosition();
    // watch.subscribe((data) => {
    // // data can be a set of coordinates, or an error (if an error occurred).
    // // data.coords.latitude
    // // data.coords.longitude
    // });
  //}
  //************MARKER********** */
  //MÉTODO CREACIÓN DE MARKER, SE AGREGA LA POSICIÓN INICIAL.
  addMarker(lat: number, lng: number) {
    return new google.maps.Marker({
      position: {lat, lng},//marker.position,
      map: this.map,
      title: 'Punto de partida'
    });
  }
  //************MARKER********** */
  //**********LOADING********** */
  //MÉTODO QUE MUESTRA LA VENTANA DE LOADING.
  async cargarMapa(){
    //CREACIÓN VENTANA DE CARGA.
    const loading = await this.loadingCtrl.create({
      message: 'Cargando coordenadas...',
      duration: 2500,
      spinner: 'circles',
    });
    return loading;
  };
  //**********LOADING********** */
  //MÉTODO QUE PERMITE CREAR EL MAPA.
  async loadMap() {
    //CREACIÓN VENTANA DE CARGA.
    const loading = await this.cargarMapa()
    //INICIALIZACIÓN DE LOADING.
    loading.present();
    //OBTENCIÓN DE LAS CORDENADAS DEL USUARIO CON EL MÉTODO GEOLOCALIZACIÓN.
    const coordenadas = await this.geolocalizacion();
    // CREACIÓN DE MAPA EN LA ETIQUETA HTML.
    const mapEle: HTMLElement = document.getElementById('map');
    // CREACIÓN DE MAPA.
    this.map = new google.maps.Map(mapEle, {
      center: this.puntoInicio,
      zoom: 12
    });
    //
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      //UNA VEZ CARGADO EL MAPA SE CIERRA EL LOADING.
      loading.dismiss();
      console.log("agregado")
      // this.renderMarkers();
      mapEle.classList.add('show-map');
      //LLAMADO AL MÉTODO PARA ESTABLECER EL PUNTO DE PARTIDA.
      this.addMarker(coordenadas.lat, coordenadas.lng);
    });
  }
  
  //**********GOOGLE MAPS********** */ 
}
