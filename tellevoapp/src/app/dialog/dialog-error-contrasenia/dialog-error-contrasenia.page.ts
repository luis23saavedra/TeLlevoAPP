import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error-contrasenia',
  templateUrl: './dialog-error-contrasenia.page.html',
  styleUrls: ['./dialog-error-contrasenia.page.scss'],
})
export class DialogErrorContraseniaPage implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)  public dialogRef: MatDialogRef<DialogErrorContraseniaPage>) { }

  ngOnInit() {
  }

}
