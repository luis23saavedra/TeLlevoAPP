import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogErrorContraseniaPageRoutingModule } from './dialog-error-contrasenia-routing.module';

import { DialogErrorContraseniaPage } from './dialog-error-contrasenia.page';

import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogErrorContraseniaPageRoutingModule,
    MatDialogModule,
    MatDividerModule
  ],
  declarations: [DialogErrorContraseniaPage]
})
export class DialogErrorContraseniaPageModule {}
