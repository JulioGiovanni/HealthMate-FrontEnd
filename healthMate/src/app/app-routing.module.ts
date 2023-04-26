import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeProfileComponent } from './pages/home-profile/home-profile.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'profile',component: ProfileComponent, 
  children: [
    {
      path: '',
      component: HistoryComponent, // another child route component that the router renders
    }
    ,
    {
      path: 'calendar', // child route path
      component: CalendarComponent, // child route component that the router renders
    },
    {
      path: 'history',
      component: HomeProfileComponent, // another child route component that the router renders
    }

  ]},
  {path:'doctors',component: DoctorsComponent},
  {path:'*',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
