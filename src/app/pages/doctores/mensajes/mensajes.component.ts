import { Component } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general/general.service';
import { DoctorsAuthService } from '../../../shared/services/auth/doctors-auth.service';
import { Doctor } from 'src/app/shared/interfaces/doctor.interface';
import { Conversation } from 'src/app/shared/interfaces/conversation.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss'],
})
export class MensajesDoctoresComponent {
  environment = environment;
  conversations: Conversation[] = [];
  doctor: Doctor = {
    id: '',
    nombre: '',
    email: '',
    password: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    foto: '',
    especialidad: {
      id: 0,
      nombre: '',
      descripcion: '',
      foto: '',
    },
    cedula: '',
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
  };

  constructor(
    private generalService: GeneralService,
    private doctorsAuthService: DoctorsAuthService
  ) {
    this.doctorsAuthService.doctor.subscribe((doctor) => {
      this.doctor = doctor;
    });
    this.generalService
      .getConversationsDoctor()
      .subscribe((conversations: any) => {
        this.conversations = conversations;
      });
  }
}
