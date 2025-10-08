import { Message } from "./Message";
import { User } from "./User";

export type Chat = {
  id: number;
  name: string;
  sentAt: string;
  type: 'PRIVATE' | 'GROUP';
  members: User[];
  lastMessage: Message | null;
}
