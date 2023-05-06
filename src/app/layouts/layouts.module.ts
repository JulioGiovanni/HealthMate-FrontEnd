import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../modules/material/material.module';

import { NavComponent } from './default-layout/nav/nav.component';
import { FooterComponent } from './default-layout/footer/footer.component';
import { SidebarComponent } from './profile-layout/sidebar/sidebar.component';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DoctorsAuthComponent } from './doctors-auth/doctors-auth.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    ProfileLayoutComponent,
    AuthLayoutComponent,
    DoctorsAuthComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, MaterialModule],
  exports: [
    DefaultLayoutComponent,
    ProfileLayoutComponent,
    AuthLayoutComponent,
    DoctorsAuthComponent,
  ],
})
export class LayoutsModule {}
