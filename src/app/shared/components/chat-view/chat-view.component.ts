import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat/chat.service';
import { ChatMessage } from '../../interfaces/chatMessage.interface';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../interfaces/user';
import { DoctorsAuthService } from '../../services/auth/doctors-auth.service';
import { Doctor } from '../../interfaces/doctor.interface';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent {
  messages: ChatMessage[] = [];
  newMessage = '';
  routeId = this.route.snapshot.paramMap.get('id');

  private messagesSubscription: Subscription;
  isDoctor: boolean = false;
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

  participant1Id = this.route.snapshot.paramMap.get('id')?.split('_')[1];
  participant2Id = this.route.snapshot.paramMap.get('id')?.split('_')[0];
  roomId = this.route.snapshot.paramMap.get('id')!;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private doctorsAuthService: DoctorsAuthService
  ) {
    this.messages = [];
    this.messagesSubscription = new Subscription();
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
    this.doctorsAuthService.doctor.subscribe((doctor) => {
      this.doctor = doctor;
    });
    this.doctorsAuthService.isAuthenticated.subscribe((isAuthenticated) => {
      this.isDoctor = isAuthenticated;
    });
  }

  ngOnInit(): void {
    this.messagesSubscription = this.chatService
      .connect('chat')
      .subscribe((event: { type: string; data: any }) => {
        switch (event.type) {
          case 'message':
            const isSentByUser =
              event.data.senderId ===
              (this.isDoctor ? this.doctor.id : this.user.id);
            this.messages.push({ ...event.data, sentByUser: isSentByUser });
            break;
          case 'previousMessages':
            this.messages = event.data.map((message: ChatMessage) => {
              const isSentByUser =
                message.senderId ===
                (this.isDoctor ? this.doctor.id : this.user.id);
              return { ...message, sentByUser: isSentByUser };
            });
            break;
        }
      });

    const payload = {
      roomId: this.roomId,
      participant1Id: this.participant1Id,
      participant2Id: this.participant2Id,
    };

    this.chatService.joinRoom(payload);
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        senderId: this.isDoctor ? this.doctor.id : this.user.id,
        //Participant1Id SIEMPRE ES EL USUARIO
        participant1Id: this.participant1Id!,
        //Participant2Id SIEMPRE ES EL DOCTOR
        participant2Id: this.participant2Id!,
        content: this.newMessage,
        sentByUser: true,
      };
      this.chatService.sendMessage(message, this.roomId);
      this.newMessage = '';
    }
  }
}
