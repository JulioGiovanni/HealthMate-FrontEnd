import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService implements Resolve<any> {
  constructor(private http: HttpClient) {}

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
}
