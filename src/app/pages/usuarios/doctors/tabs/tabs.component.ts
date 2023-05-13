import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/shared/interfaces/doctor.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() doctor: Doctor;
  activeTabIndex: number = 1; // El índice de la pestaña activa por defecto

  constructor() {
    this.doctor = {
      id: '',
      nombre: '',
      cedula: '',
      especialidad: {
        id: 0,
        nombre: '',
        descripcion: '',
        foto: '',
      },
      telefono: '',
      email: '',
      password: '',
      preparacionfisica: '',
      preparacionlinea: '',
      experiencia: '',
      idiomas: [],
      foto: '',
      genero: '',
      fechaNacimiento: '',
      direccion: '',
      hospital: '',
      reembolso: '',
      formacion: '',
      horario: '',
      precio: 0,
      consulta: '',
    };
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}
