import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { User } from '../../interfaces/user';
import { Doctor } from '../../interfaces/doctor.interface';
import { DoctorsAuthService } from '../auth/doctors-auth.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralService implements Resolve<any> {
  user: User = {
    id: '',
    nombre: '',
    email: '',
    password: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    foto: '',
    googleId: '',
    token: '',
  };
  doctor: Doctor = {
    id: '',
    nombre: '',
    email: '',
    password: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    foto: '',
    especialidad: {
      id: 0,
      nombre: '',
      descripcion: '',
      foto: '',
    },
    cedula: '',
    consulta: '',
    experiencia: '',
    formacion: '',
    genero: '',
    horario: '',
    hospital: '',
    idiomas: [],
    precio: 0,
    preparacionfisica: '',
    preparacionlinea: '',
    reembolso: '',
  };
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private doctorsAuthService: DoctorsAuthService
  ) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
    this.doctorsAuthService.doctor.subscribe((doctor) => {
      this.doctor = doctor;
    });
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if (state.url.includes('doctor')) {
      return this.http.get(
        environment.apiUrl + 'doctores/' + route.params['id']
      );
    }
    return this.http.get(
      environment.apiUrl + 'doctores/especialidad/' + route.params['categoria']
    );
  }

  allCategories() {
    return this.http.get(environment.apiUrl + 'especialidades');
  }

  lastRegisteredDoctors() {
    return this.http.get(environment.apiUrl + 'doctores/lastdoctors');
  }

  getCitas() {
    return this.http.get(environment.apiUrl + 'citas?=' + this.user.id);
  }

  getSingleCita(id: string) {
    return this.http.get(environment.apiUrl + 'citas/' + id);
  }

  getConversations() {
    return this.http.get(
      environment.apiUrl + 'mensajes/conversations/' + this.user.id
    );
  }
  getConversationsDoctor() {
    return this.http.get(
      environment.apiUrl + 'mensajes/conversations/' + this.doctor.id
    );
  }

  getCitasDoctor() {
    return this.http.get(
      environment.apiUrl + 'citas/doctor?id=' + this.doctor.id
    );
  }
}
