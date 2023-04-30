import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NavComponent } from './layouts/default-layout/nav/nav.component';
import { FooterComponent } from './layouts/default-layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DoctoresComponent } from './pages/doctors/doctors.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HistoryComponent } from './pages/history/history.component';
import { SidebarComponent } from './layouts/profile-layout/sidebar/sidebar.component';
import { HomeProfileComponent } from './pages/home-profile/home-profile.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { SelectComponent } from './pages/home/select/select.component';
import { CardComponent } from './pages/doctors/card/card.component';
import { RatingComponent } from './pages/doctors/rating/rating.component';
import { TabsComponent } from './pages/doctors/tabs/tabs.component';
import { DetailsComponent } from './pages/doctors/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NewProfileCarouselComponent } from './pages/home/new-profile-carousel/new-profile-carousel.component';
import { GoogleButtonComponent } from './shared/components/google-button/google-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    DoctoresComponent,
    CalendarComponent,
    NotFoundComponent,
    RegistroComponent,
    HistoryComponent,
    SidebarComponent,
    HomeProfileComponent,
    LogoComponent,
    SelectComponent,
    CardComponent,
    RatingComponent,
    TabsComponent,
    DetailsComponent,
    LoginComponent,
    DefaultLayoutComponent,
    ProfileLayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    NewProfileCarouselComponent,
    GoogleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
