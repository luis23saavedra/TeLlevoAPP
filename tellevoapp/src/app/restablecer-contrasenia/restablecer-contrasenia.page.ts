import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Animation,AnimationController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-restablecer-contrasenia',
  templateUrl: './restablecer-contrasenia.page.html',
  styleUrls: ['./restablecer-contrasenia.page.scss'],
})

export class RestablecerContraseniaPage  {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingrese un Email válido';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Email confirmado',
      subHeader: '',
      message: 'Se ha enviado un còdigo de verificaciòn a su correo',
      buttons: ['OK'],
    });

    await alert.present();
  }
 
  constructor(private alertController: AlertController) { 
      
  }
  ngOnInit() {
  }

}


