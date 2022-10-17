import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';




@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 
  constructor(private alertController: AlertController, private data: ApiService) { }
  
  //CREACIÓN DE ARRAY.
  usuarios = [];
  
  ngOnInit() { 
    this.data.consultaDatos().subscribe((data) => {
      this.usuarios = data,console.log(data)
      
    }) 
    
  }
}  

