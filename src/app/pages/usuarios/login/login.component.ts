import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { SignInCredentials } from 'src/app/shared/interfaces/signInCrendentials.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  credenciales: SignInCredentials = {
    email: '',
    password: '',
  };

  login() {
    this.authService.signIn(this.credenciales).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
