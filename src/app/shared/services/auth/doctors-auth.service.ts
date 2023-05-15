import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Doctor } from '../../interfaces/doctor.interface';

@Injectable({
  providedIn: 'root',
})
export class DoctorsAuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  private _doctor = new BehaviorSubject<Doctor>({
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
  });

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('doctortoken');
    const doctor = JSON.parse(localStorage.getItem('doctor')!);

    if (token) {
      this._isAuthenticated.next(true);
    }

    if (doctor) {
      this._doctor.next(doctor);
    }
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  get doctor(): Observable<any> {
    return this._doctor.asObservable();
  }

  signIn(email: string, password: string) {
    return this.http
      .post(environment.apiUrl + 'doctor-auth/login', { email, password })
      .subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('doctortoken', response.token);
        localStorage.setItem('doctor', JSON.stringify(response.doctor));
        this._isAuthenticated.next(true);
        this._doctor.next(response.doctor);
      });
  }

  signUp(doctor: any) {
    return this.http.post(environment.apiUrl + 'doctor-auth/register', doctor);
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('doctortoken');
    this._isAuthenticated.next(false);
    this._doctor.next({
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
    });
  }
}
