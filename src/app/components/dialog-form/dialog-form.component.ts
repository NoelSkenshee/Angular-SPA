import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from "@angular/material/dialog"

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<DialogFormComponent>) { }

  ngOnInit(): void {
  }


  closeModal(){
    this.dialogRef.close()
  }

}
