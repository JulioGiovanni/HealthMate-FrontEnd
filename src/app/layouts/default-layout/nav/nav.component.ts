import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { DoctorsAuthService } from 'src/app/shared/services/auth/doctors-auth.service';
import { ProfileService } from 'src/app/shared/services/profile/profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  profile: boolean = false;
  isAuth = false;
  isDoctorAuth = false;

  constructor(
    private authService: AuthService,
    private doctorsAuthService: DoctorsAuthService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.router.url.includes('perfil'));
    this.authService.isAuthenticated.subscribe((response) => {
      this.isAuth = response;
    });
    this.doctorsAuthService.isAuthenticated.subscribe((response) => {
      this.isDoctorAuth = response;
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const currentUrl = (event as NavigationEnd).url;
        this.profile = currentUrl.includes('/perfil');
        // Utiliza la ruta actual como necesites en tu componente
      });
  }

  onSignOut() {
    this.authService.signOut();
    this.doctorsAuthService.signOut();
  }
}
