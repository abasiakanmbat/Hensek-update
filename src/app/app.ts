import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from "@angular/material/button";
import { Dialog } from './shared/dialog/dialog';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, MatDialogModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private dialog = inject(MatDialog);
ngOnInit() {
   this.dialog.open(Dialog, {
      data: { title: 'Hensek - Upcomming Events', message: 'Akwa Ibom state Anniversary', imageUrl: '/aks-hensek.jpg' }
    });
}
  openDialog() {
    this.dialog.open(Dialog, {
      data: { title: 'Hensek - Upcomming Events', message: 'Akwa Ibom state Anniversary', imageUrl: '/aks-hensek.jpg' }
    });
  }
}
