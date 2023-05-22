import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { ChatMessage } from '../../interfaces/chatMessage.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket!: Socket;

  constructor() {}

  public connect(namespace: string): Observable<any> {
    const url = `${environment.apiUrl}/${namespace}`;
    this.socket = io(url);

    return new Observable<any>((observer: Observer<any>) => {
      this.socket.on('message', (message: ChatMessage) => {
        observer.next({ type: 'message', data: message });
      });

      this.socket.on('previousMessages', (messages: ChatMessage[]) => {
        observer.next({ type: 'previousMessages', data: messages });
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

  public joinRoom({ roomId, participant1Id, participant2Id }: any): void {
    this.socket.emit('joinRoom', { roomId, participant1Id, participant2Id });
  }

  public sendMessage(message: ChatMessage, roomId: string): void {
    this.socket.emit('message', { roomId, message });
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
