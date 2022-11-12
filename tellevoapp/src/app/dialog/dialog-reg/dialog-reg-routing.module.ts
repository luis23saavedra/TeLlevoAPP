import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogRegPage } from './dialog-reg.page';

const routes: Routes = [
  {
    path: '',
    component: DialogRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogRegPageRoutingModule {}
