import { Doctor } from './doctor.interface';
import { User } from './user';

export interface Cita {
  id: string;
  fecha: string;
  motivo: string;
  estado: string;
  doctor: Doctor;
  usuario: User;
}
