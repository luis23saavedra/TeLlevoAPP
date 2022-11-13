import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogErrorContraseniaPageRoutingModule } from './dialog-error-contrasenia-routing.module';

import { DialogErrorContraseniaPage } from './dialog-error-contrasenia.page';

import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogErrorContraseniaPageRoutingModule,
    MatDividerModule
  ],
  declarations: [DialogErrorContraseniaPage]
})
export class DialogErrorContraseniaPageModule {}
