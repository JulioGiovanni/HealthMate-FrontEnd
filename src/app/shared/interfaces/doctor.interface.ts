import { Especialidad } from './especialidad.interface';
import { Idioma } from './idioma.interface';

export interface Doctor {
  id: string;
  nombre: string;
  cedula: string;
  especialidad: Especialidad;
  telefono: string;
  email: string;
  password: string;
  preparacionfisica: string;
  preparacionlinea: string;
  experiencia: string;
  idiomas: Idioma[];
  foto: string;
  genero: string;
  fechaNacimiento: string;
  direccion: string;
  hospital: string;
  reembolso: string;
  formacion: string;
  horario: string;
  precio: number;
  consulta: string;
}
