import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  constructor(private servicio:UserserviceService, private ruta: ActivatedRoute,public dialog: MatDialog){}

  animal!: string;
  name!: string;

 

  openDialog(): void {
    const dialogRef = this.dialog.open(MensajeComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

