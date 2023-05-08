import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat/chat.service';
import { ChatMessage } from '../../interfaces/chatMessage.interface';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent {
  messages: ChatMessage[] = [];
  newMessage = '';
  private messagesSubscription: Subscription;

  constructor(private chatService: ChatService) {
    this.messages = [];
    this.messagesSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.messagesSubscription = this.chatService
      .connect('chat')
      .subscribe((message: ChatMessage) => {
        this.messages.push(message);
      });
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        content: this.newMessage,
        sentByUser: true,
      };
      this.chatService.sendMessage(message);
      this.newMessage = '';
    }
  }
}
