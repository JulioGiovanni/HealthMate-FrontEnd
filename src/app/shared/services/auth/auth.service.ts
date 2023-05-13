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
    telefono: 0,
    fechaNacimiento: new Date(),
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
      telefono: 0,
      fechaNacimiento: new Date(),
      foto: '',
      googleId: '',
      token: '',
    });
  }
}
