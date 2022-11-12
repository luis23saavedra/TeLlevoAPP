import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error-login',
  templateUrl: './dialog-error-login.page.html',
  styleUrls: ['./dialog-error-login.page.scss'],
})
export class DialogErrorLoginPage implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)  public dialogRef: MatDialogRef<DialogErrorLoginPage>) { }

  ngOnInit() {
  }

}
