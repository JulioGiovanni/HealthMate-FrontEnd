import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuth = false;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated.subscribe((response) => {
      this.isAuth = response;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url.includes('login') || state.url.includes('registro')) {
      if (this.isAuth) {
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }
    if (this.isAuth) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
