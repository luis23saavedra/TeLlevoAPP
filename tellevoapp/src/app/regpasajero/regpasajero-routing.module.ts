import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegpasajeroPage } from './regpasajero.page';

const routes: Routes = [
  {
    path: '',
    component: RegpasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegpasajeroPageRoutingModule {}
