import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogRegPageRoutingModule } from './dialog-reg-routing.module';

import { DialogRegPage } from './dialog-reg.page';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogRegPageRoutingModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [DialogRegPage]
})
export class DialogRegPageModule {}
