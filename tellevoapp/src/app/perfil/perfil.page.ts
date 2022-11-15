import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { DbService } from './../services/db.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 
  constructor( private data: ApiService, private database: DbService, private geo: Geolocation) { }
  
  //CREACIÓN DE ARRAY.
  usuarios = [];
  coordenadas = {};
  geolocalizacion(){

    this.geo.getCurrentPosition().then((resp) =>{
      this.coordenadas = resp.coords.latitude +',' + resp.coords.longitude
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("localizacion: ", this.coordenadas)
    }).catch((error) =>{
      console.log("Error al obtener la localizacion", error)
    });
  }
  ngOnInit() { 
    this.geolocalizacion()
    // this.data.consultaDatos().subscribe((data) => {
    //   this.usuarios = data,console.log(data)
      
    // })
    
    // this.data.registroConductor().subscribe((data) => {
    //   this.usuarios = data,console.log(data),
    //   this.database.insertar("conductor1", data).then(() => {
    //     console.log('registro guardado!');
    //   },(error) => {
    //     console.log(error)
    //   });
    // })
    // this.data.registroPasajero().subscribe((data) => {
    //   this.usuarios = data,console.log(data)
    // })
    //CAMBIAR EL FORMATO JSON
    // this.database.insertar(this.usuarios.conductor, this.usuarios).then(() => {
    //   console.log('registro guardado!');
    // },(error) => {
    //   console.log(error)
    // });
  }
}  

