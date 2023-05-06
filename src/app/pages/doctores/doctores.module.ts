import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctoresRegistroComponent } from './registro/registro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectEspecialidadComponent } from './registro/select-especialidad/select-especialidad.component';
import { RouterModule } from '@angular/router';
import { DoctoresLoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    DoctoresRegistroComponent,
    SelectEspecialidadComponent,
    DoctoresLoginComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [],
})
export class DoctoresModule {}
