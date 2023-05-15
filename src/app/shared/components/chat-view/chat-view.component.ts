import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat/chat.service';
import { ChatMessage } from '../../interfaces/chatMessage.interface';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent {
  messages: ChatMessage[] = [];
  newMessage = '';
  routeId = this.route.snapshot.paramMap.get('id');

  // roomId =
  //   'c0c84dc3-eeed-44d5-ab63-a90d239af9ce' +
  //   '7a5cf66f-7e48-41c5-ae58-7045c7fd5903';
  private messagesSubscription: Subscription;
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
  roomId = this.route.snapshot.paramMap.get('id') + this.user.id;
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.messages = [];
    this.messagesSubscription = new Subscription();
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.messagesSubscription = this.chatService
      .connect('chat')
      .subscribe((message: ChatMessage) => {
        this.messages.push(message);
      });
    this.chatService.joinRoom(this.roomId);
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        senderId: this.user.id,
        //Participant1Id SIEMPRE ES EL USUARIO
        participant1Id: this.user.id,
        //Participant2Id SIEMPRE ES EL DOCTOR
        participant2Id: this.route.snapshot.paramMap.get('id')!,
        content: this.newMessage,
        sentByUser: true,
      };
      this.chatService.sendMessage(message, this.roomId);
      this.newMessage = '';
    }
  }
}
