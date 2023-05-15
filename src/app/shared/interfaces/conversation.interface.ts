import { Doctor } from './doctor.interface';
import { User } from './user';

export interface Conversation {
  id: number;
  roomId: string;
  participant1: User;
  participant2: Doctor;
}
