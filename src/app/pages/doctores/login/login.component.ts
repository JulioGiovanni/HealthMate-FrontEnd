import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsAuthService } from 'src/app/shared/services/auth/doctors-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class DoctoresLoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private doctorsAuthService: DoctorsAuthService,
    private router: Router
  ) {}

  iniciarSesion() {
    this.doctorsAuthService.signIn(this.email, this.password);
    this.router.navigate(['/doctores']);
  }
}
