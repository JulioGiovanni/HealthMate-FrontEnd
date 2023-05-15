import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctoresRegistroComponent } from './registro/registro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectEspecialidadComponent } from './registro/select-especialidad/select-especialidad.component';
import { RouterModule } from '@angular/router';
import { DoctoresLoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DoctoresHomeComponent } from './home/home.component';
import { DetalleDoctorComponent } from './home/detalle/detalle.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MensajesDoctoresComponent } from './mensajes/mensajes.component';
@NgModule({
  declarations: [
    DoctoresRegistroComponent,
    SelectEspecialidadComponent,
    DoctoresLoginComponent,
    DoctoresHomeComponent,
    DetalleDoctorComponent,
    MensajesDoctoresComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [],
})
export class DoctoresModule {}
