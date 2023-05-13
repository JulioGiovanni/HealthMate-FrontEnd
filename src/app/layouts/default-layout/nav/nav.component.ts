import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { DoctorsAuthService } from 'src/app/shared/services/auth/doctors-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(
    private authService: AuthService,
    private doctorsAuthService: DoctorsAuthService
  ) {}

  isAuth = false;
  isDoctorAuth = false;

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((response) => {
      this.isAuth = response;
    });
    this.doctorsAuthService.isAuthenticated.subscribe((response) => {
      this.isDoctorAuth = response;
    });
  }

  onSignOut() {
    this.authService.signOut();
    this.doctorsAuthService.signOut();
  }
}
