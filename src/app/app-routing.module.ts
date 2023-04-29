import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DoctoresComponent } from './pages/doctors/doctors.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeProfileComponent } from './pages/home-profile/home-profile.component';
import { DetailsComponent } from './pages/doctors/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { layoutTypes } from './shared/utils';

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
  { path: 'doctores', component: DoctoresComponent },
  { path: 'doctores/:id', component: DetailsComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
