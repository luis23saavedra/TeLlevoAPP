import { Component, OnInit, Inject  } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-reg',
  templateUrl: './dialog-reg.page.html',
  styleUrls: ['./dialog-reg.page.scss'],
})
export class DialogRegPage implements OnInit {

 
  constructor(@Inject(MAT_DIALOG_DATA)  public dialogRef: MatDialogRef<DialogRegPage>) { }

  
  ngOnInit() {
    
  }

}
