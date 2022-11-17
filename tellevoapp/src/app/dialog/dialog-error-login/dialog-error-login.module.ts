import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogErrorLoginPageRoutingModule } from './dialog-error-login-routing.module';

import { DialogErrorLoginPage } from './dialog-error-login.page';

import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogErrorLoginPageRoutingModule,
    MatDividerModule,
    MatDialogModule
  ],
  declarations: [DialogErrorLoginPage]
})
export class DialogErrorLoginPageModule {}
