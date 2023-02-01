import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Tbldatos } from 'src/app/models/tbldatos';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  datos: Tbldatos[] = [
    {Id: '', Descripcion: '', Precio: ''}
    ]

  constructor(private servicio:UserserviceService, private ruta: ActivatedRoute,public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tbldatos,){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  Procesar(){
    if(this.datos[0].Id == ''){
      this.servicio.getNuevo(this.datos[0]).subscribe();
    }else{
      this.servicio.getEditar(this.datos[0]).subscribe();
    }
    location.reload()
  }

  ngOnInit(){
    let id = this.ruta.snapshot.params['id'];
    this.servicio.getBuscar(id).subscribe(
      {
        next:(datos: Tbldatos[]) => this.datos[0] = datos[0]
      }
    );
  }

}
