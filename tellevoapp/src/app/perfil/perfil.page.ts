import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { DbService } from './../services/db.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 
  constructor( private data: ApiService, private database: DbService) { }
  
  //CREACIÓN DE ARRAY.
  usuarios = [];
  
  ngOnInit() { 
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

