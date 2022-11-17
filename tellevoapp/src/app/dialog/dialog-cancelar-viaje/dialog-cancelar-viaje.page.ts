import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cancelar-viaje',
  templateUrl: './dialog-cancelar-viaje.page.html',
  styleUrls: ['./dialog-cancelar-viaje.page.scss'],
})
export class DialogCancelarViajePage implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<DialogCancelarViajePage>) { }
 
  ngOnInit() {
  }

}
