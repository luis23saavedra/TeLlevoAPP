import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogCancelarViajePage } from './dialog-cancelar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: DialogCancelarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogCancelarViajePageRoutingModule {}
