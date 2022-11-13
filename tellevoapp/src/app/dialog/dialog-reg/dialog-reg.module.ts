import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogRegPageRoutingModule } from './dialog-reg-routing.module';

import { DialogRegPage } from './dialog-reg.page';

import {MatDialogModule} from '@angular/material/dialog';

import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogRegPageRoutingModule,
    MatDialogModule,
    MatDividerModule
  ],
  declarations: [DialogRegPage]
})
export class DialogRegPageModule {}
