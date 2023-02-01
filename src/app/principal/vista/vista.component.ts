import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Tbldatos } from 'src/app/models/tbldatos';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  constructor(private servicio: UserserviceService, private ruta: ActivatedRoute,public dialog: MatDialog){}

  registros: Tbldatos[] = [];
  
  ngOnInit(){
    this.Vista();
  }

  Vista(){
    this.registros = []
    this.servicio.getVista().subscribe({
      next:(datos: Tbldatos[])=> this.registros = datos,
      complete: ()=> console.log('Servicio recupero los registros de la tabla datos')
    });
  }

  Eliminar(id:string){
    this.servicio.getEliminar(id).subscribe({
      complete: () => console.log('Registro eliminado')
    });

    this.Vista();
  } 

  animal!: string;
  name!: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

