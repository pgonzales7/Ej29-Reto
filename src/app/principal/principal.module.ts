import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    LoginComponent,
    MensajeComponent,
    PruebaComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    LoginComponent,
    MensajeComponent,
    PruebaComponent,
  ]
})
export class PrincipalModule { }
