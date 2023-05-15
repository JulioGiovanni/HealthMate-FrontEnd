import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CalendarComponent } from './calendar/calendar.component';
// import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctoresComponent } from './doctors/doctors.component';
import { RegistroComponent } from './registro/registro.component';
import { CardComponent } from './doctors/card/card.component';
import { RatingComponent } from './doctors/rating/rating.component';
import { TabsComponent } from './doctors/tabs/tabs.component';
import { DetailsComponent } from './doctors/details/details.component';
import { LoginComponent } from './login/login.component';
import { NewProfileCarouselComponent } from './home/new-profile-carousel/new-profile-carousel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { SelectCategoriaComponent } from './home/select-categoria/select-categoria.component';
import { ChatsComponent } from './profile/chats/chats.component';
import { CitasComponent } from './profile/citas/citas.component';
import { DetalleComponent } from './profile/citas/detalle/detalle.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    DoctoresComponent,
    RegistroComponent,
    CardComponent,
    RatingComponent,
    TabsComponent,
    DetailsComponent,
    LoginComponent,
    NewProfileCarouselComponent,
    SelectCategoriaComponent,
    ChatsComponent,
    CitasComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    ProfileComponent,
    DoctoresComponent,
    RegistroComponent,
    DetailsComponent,
    LoginComponent,
    SelectCategoriaComponent,
  ],
})
export class UsuariosModule {}
