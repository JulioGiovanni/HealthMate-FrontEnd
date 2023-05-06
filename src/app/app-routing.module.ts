import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/usuarios/home/home.component';
import { ProfileComponent } from './pages/usuarios/profile/profile.component';
import { DoctoresComponent } from './pages/usuarios/doctors/doctors.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeProfileComponent } from './pages/usuarios/home-profile/home-profile.component';
import { DetailsComponent } from './pages/usuarios/doctors/details/details.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { layoutTypes } from './shared/utils';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { DoctoresHomeComponent } from './pages/doctores/home/home.component';
import { DoctoresLoginComponent } from './pages/doctores/login/login.component';
import { DoctoresRegistroComponent } from './pages/doctores/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      layout: layoutTypes.Auth,
    },
  },
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full',
    data: {
      layout: layoutTypes.Auth,
    },
  },
  {
    path: 'perfil',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: HistoryComponent, // another child route component that the router renders
      },
      {
        path: 'calendar', // child route path
        component: CalendarComponent, // child route component that the router renders
      },
      {
        path: 'history',
        component: HomeProfileComponent, // another child route component that the router renders
      },
    ],
  },
  {
    path: 'categoria/:categoria',
    children: [
      {
        path: '',
        component: DoctoresComponent,
      },
      {
        path: 'doctor/:id',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'doctores',
    children: [
      {
        path: '',
        component: DoctoresHomeComponent,
      },
      {
        path: 'login',
        component: DoctoresLoginComponent,
        data: {
          layout: layoutTypes.DoctorsAuth,
        },
      },
      {
        path: 'registro',
        component: DoctoresRegistroComponent,
        data: {
          layout: layoutTypes.DoctorsAuth,
        },
      },
    ],
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
