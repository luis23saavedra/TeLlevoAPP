import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogCancelarViajePageRoutingModule } from './dialog-cancelar-viaje-routing.module';

import { DialogCancelarViajePage } from './dialog-cancelar-viaje.page';

import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogCancelarViajePageRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [DialogCancelarViajePage]
})
export class DialogCancelarViajePageModule {}
