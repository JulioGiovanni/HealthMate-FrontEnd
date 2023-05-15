import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { SignInCredentials } from '../../interfaces/signInCrendentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  private _user = new BehaviorSubject<User>({
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
  });

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user')!);

    if (token) {
      this._isAuthenticated.next(true);
    }

    if (user) {
      this._user.next(user);
    }
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  get user(): Observable<any> {
    return this._user.asObservable();
  }

  signIn({ email, password }: SignInCredentials) {
    return this.http
      .post(environment.apiUrl + 'auth/login', { email, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.usuario));
          this._isAuthenticated.next(true);
          this._user.next(response.user);
        })
      );
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._isAuthenticated.next(false);
    this._user.next({
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
    });
  }

  signUp(user: any) {
    return this.http.post(environment.apiUrl + 'auth/register', user);
  }

  update(user: User, imagen?: File) {
    const formData = new FormData();
    formData.append('nombre', user.nombre);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('direccion', user.direccion);
    formData.append('telefono', user.telefono);
    formData.append('fechaNacimiento', user.fechaNacimiento);

    if (imagen) {
      formData.append('imagen', imagen, imagen.name);
    }

    return this.http
      .patch(environment.apiUrl + 'usuarios/' + user.id, formData)
      .subscribe(
        (response: any) => {
          localStorage.setItem('user', JSON.stringify(response.usuario));
          this._user.next(response.usuario);
          // Aquí puedes realizar acciones adicionales después de recibir la respuesta del backend
        },
        (error: any) => {
          console.error(error);
          // Aquí puedes manejar cualquier error que ocurra durante la solicitud
        }
      );
  }
}
