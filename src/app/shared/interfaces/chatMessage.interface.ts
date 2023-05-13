export interface ChatMessage {
  senderId: string;
  participant1Id: string;
  participant2Id: string;
  content: string;
  sentByUser: boolean;
}
