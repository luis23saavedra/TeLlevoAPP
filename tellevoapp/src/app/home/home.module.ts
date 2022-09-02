import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// //IMPORTADO PARA QUE APAREZCA EL INPUT DEL EMAIL.
// import { ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // MatFormFieldModule,
    // MatInputModule,
    // ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
