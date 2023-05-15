import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  direccion: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  foto: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.signUp({
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      direccion: this.direccion,
      telefono: this.telefono,
      fechaNacimiento: this.fechaNacimiento,
      foto: this.foto,
    });
  }
}
