import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conversation } from 'src/app/shared/interfaces/conversation.interface';
import { GeneralService } from '../../../../shared/services/general/general.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent {
  environment = environment;
  conversations: Conversation[] = [];
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
  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private authService: AuthService
  ) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
    this.generalService.getConversations().subscribe((conversations: any) => {
      this.conversations = conversations;
    });
  }
}
