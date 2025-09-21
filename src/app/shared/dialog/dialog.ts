import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatDialogActions,
  // MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CountdownComponent } from "./countdown";

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogActions,
    // MatDialogClose,
    MatDialogContent,
    MatDialogTitle, CommonModule,
    CountdownComponent
],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css'
})
export class Dialog {
  constructor(
    private dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; imageUrl?: string }
  ) {}

  close() {
    this.dialogRef.close();
  }

}
