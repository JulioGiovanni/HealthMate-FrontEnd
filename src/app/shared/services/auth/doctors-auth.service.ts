import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class DoctorsAuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('doctortoken');
    if (token) {
      this._isAuthenticated.next(true);
    }
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  signIn(email: string, password: string) {
    return this.http
      .post(environment.apiUrl + 'doctor-auth/login', { email, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('doctortoken', response.token);
          this._isAuthenticated.next(true);
        })
      );
  }

  signOut() {
    localStorage.removeItem('token');
    this._isAuthenticated.next(false);
  }
}
