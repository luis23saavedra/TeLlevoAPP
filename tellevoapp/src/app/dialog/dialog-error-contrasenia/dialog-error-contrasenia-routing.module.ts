import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogErrorContraseniaPage } from './dialog-error-contrasenia.page';

const routes: Routes = [
  {
    path: '',
    component: DialogErrorContraseniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogErrorContraseniaPageRoutingModule {}
