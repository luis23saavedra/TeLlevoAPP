import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogErrorLoginPage } from './dialog-error-login.page';

const routes: Routes = [
  {
    path: '',
    component: DialogErrorLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogErrorLoginPageRoutingModule {}
