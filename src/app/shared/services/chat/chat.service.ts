import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { ChatMessage } from '../../interfaces/chatMessage.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket!: Socket;
  private readonly baseUrl = 'http://localhost:3000';

  constructor() {}

  public connect(namespace: string): Observable<ChatMessage> {
    const url = `${this.baseUrl}/${namespace}`;
    this.socket = io(url);
    console.log(this.socket);

    return new Observable<ChatMessage>((observer: Observer<ChatMessage>) => {
      this.socket.on('message', (message: ChatMessage) => {
        observer.next(message);
      });

      this.socket.on('disconnect', () => {
        observer.complete();
      });

      this.socket.on('error', (error: any) => {
        observer.error(error);
      });

      // Agrega este manejador de eventos
      this.socket.on('connect_error', (error: any) => {
        console.error('Error al conectar con el servidor:', error);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }

  public sendMessage(message: ChatMessage): void {
    this.socket.emit('message', message);
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
