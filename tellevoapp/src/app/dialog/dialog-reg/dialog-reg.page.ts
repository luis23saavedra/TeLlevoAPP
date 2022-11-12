import { Component, OnInit, Inject  } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';

import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-dialog-reg',
  templateUrl: './dialog-reg.page.html',
  styleUrls: ['./dialog-reg.page.scss'],
})
export class DialogRegPage implements OnInit {

  //**********CAPTURA DE DATOS.**********
  datos = {

    usuario: "",
      
  }

  usuario = {
    rut: "",
    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    contrasenia: ""
  }
  arrayPasajero: any = [{
    rut: "",
    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    contrasenia: ""
   }];
  //**********CAPTURA DE DATOS.**********
  constructor(@Inject(MAT_DIALOG_DATA)  public dialogRef: MatDialogRef<DialogRegPage>, private database: DbService) { }

  pasajero(){
    this.datos.usuario = "pasajero"
    this.database.consultar(this.datos.usuario).subscribe((datosPasajero => {
      // this.arrayPasajero = pasajero;
      // pasajero.forEach((x : any) => {
      //   this.arrayPasajero.push({
      //     rut: x.payload.doc.id,
      //   })
      // })
    }))
    console.log(this.pasajero)
  }

  ngOnInit() {
  }

}
