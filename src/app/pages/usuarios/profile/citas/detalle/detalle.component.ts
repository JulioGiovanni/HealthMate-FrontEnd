import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/shared/interfaces/cita.interface';
import { GeneralService } from 'src/app/shared/services/general/general.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  environment = environment;
  cita: Cita = {
    id: '',
    fecha: '',
    estado: '',
    motivo: '',
    doctor: {
      id: '',
      nombre: '',
      email: '',
      password: '',
      direccion: '',
      telefono: '',
      fechaNacimiento: '',
      foto: '',
      cedula: '',
      especialidad: {
        id: 0,
        nombre: '',
        descripcion: '',
        foto: '',
      },
      consulta: '',
      experiencia: '',
      formacion: '',
      genero: '',
      horario: '',
      hospital: '',
      idiomas: [],
      precio: 0,
      preparacionfisica: '',
      preparacionlinea: '',
      reembolso: '',
    },

    usuario: {
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
    },
  };
  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService
  ) {
    this.generalService
      .getSingleCita(this.route.snapshot.params['id'])
      .subscribe((cita: any) => {
        this.cita = cita;
      });
  }
}
