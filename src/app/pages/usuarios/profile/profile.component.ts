import { Component } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  environment = environment;
  usuario: User = {
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
  };
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';
  fechaNacimiento: string = '';
  foto: string = '';
  file: any = '';
  constructor(private authService: AuthService) {
    this.authService.user.subscribe((user) => {
      this.usuario = user;
      this.foto = environment.supabaseUrl + this.usuario.foto;
      this.nombre = this.usuario.nombre;
      this.telefono = this.usuario.telefono;
      this.direccion = this.usuario.direccion;
      this.fechaNacimiento = this.usuario.fechaNacimiento;
    });
  }
  uploadPhoto() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    this.file = fileInput.files?.[0];

    if (this.file) {
      // Aquí puedes implementar la lógica para subir el archivo al servidor
      // Puedes utilizar librerías como FormData o HttpClient para enviar el archivo

      // Para visualizar la imagen seleccionada de inmediato, puedes usar FileReader
      const reader = new FileReader();
      reader.onload = (e) => (this.foto = e.target!.result as string);
      reader.readAsDataURL(this.file);
    }
  }

  update() {
    this.usuario.foto = this.file.name;
    this.usuario.nombre = this.nombre;
    this.usuario.telefono = this.telefono;
    this.usuario.direccion = this.direccion;
    this.usuario.fechaNacimiento = this.usuario.fechaNacimiento;
    this.authService.update(this.usuario, this.file ? this.file : null);
  }
}
