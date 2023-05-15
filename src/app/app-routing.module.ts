import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/usuarios/home/home.component';
import { ProfileComponent } from './pages/usuarios/profile/profile.component';
import { DoctoresComponent } from './pages/usuarios/doctors/doctors.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DetailsComponent } from './pages/usuarios/doctors/details/details.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { layoutTypes } from './shared/utils';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { DoctoresHomeComponent } from './pages/doctores/home/home.component';
import { DoctoresLoginComponent } from './pages/doctores/login/login.component';
import { DoctoresRegistroComponent } from './pages/doctores/registro/registro.component';
import { ChatViewComponent } from './shared/components/chat-view/chat-view.component';
import { GeneralService } from './shared/services/general/general.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { ChatsComponent } from './pages/usuarios/profile/chats/chats.component';
import { CitasComponent } from './pages/usuarios/profile/citas/citas.component';
import { DetalleComponent } from './pages/usuarios/profile/citas/detalle/detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat/:id', component: ChatViewComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      layout: layoutTypes.Auth,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full',
    data: {
      layout: layoutTypes.Auth,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProfileComponent, // another child route component that the router renders
      },
      {
        path: 'chats',
        component: ChatsComponent, // another child route component that the router renders
      },
      {
        path: 'citas',
        children: [
          {
            path: '',
            component: CitasComponent, // another child route component that the router renders
          },
          {
            path: ':id',
            component: DetalleComponent,
          }, // another child route component that the router renders
        ],
      },
    ],
  },
  {
    path: 'categoria/:categoria',
    children: [
      {
        path: '',
        component: DoctoresComponent,
        resolve: {
          data: GeneralService,
        },
      },
      {
        path: 'doctor/:id',
        component: DetailsComponent,
        resolve: {
          data: GeneralService,
        },
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
