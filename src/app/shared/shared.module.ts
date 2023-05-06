import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { LogoComponent } from './components/logo/logo.component';
import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    SelectComponent,
    LogoComponent,
    GoogleButtonComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SelectComponent,
    LogoComponent,
    GoogleButtonComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}
