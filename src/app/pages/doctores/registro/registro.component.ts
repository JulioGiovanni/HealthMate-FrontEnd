import { Component, Input } from '@angular/core';
import { DoctorsAuthService } from 'src/app/shared/services/auth/doctors-auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class DoctoresRegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  direccion: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  foto: string = '';
  especialidad: string = '';
  cedula: string = '';
  certificado: string = '';

  @Input() selectedOption = 'Elige tu especialidad';

  constructor(private doctorsAuthService: DoctorsAuthService) {}

  updateSelectedOption(option: string) {
    this.selectedOption = option;
  }

  registrarse() {
    this.doctorsAuthService.signUp({});
  }

  options = [
    'Cardiologista',
    'Dermatologista',
    'Endocrinologista',
    'Gastroenterologista',
    'Ginecologista',
    'Infectologista',
    'Neurologista',
    'Oftalmologista',
    'Ortopedista',
  ];
}
