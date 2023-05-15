import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/interfaces/doctor.interface';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  doctor: Doctor;
  user: User = {
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
  environment = environment;
  direcciones: any = [];
  motivos: any = [];

  constructor(private route: ActivatedRoute, authService: AuthService) {
    this.doctor = this.route.snapshot.data['data'];
    this.direcciones = [
      {
        id: 1,
        direccion: this.doctor.direccion,
      },
    ];
    this.motivos = [
      {
        id: 1,
        motivo: 'Consulta',
      },
      {
        id: 2,
        motivo: 'Revisión',
      },
      {
        id: 3,
        motivo: 'Operación',
      },
    ];
    authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit() {}
}
