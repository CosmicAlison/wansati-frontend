import { Message } from "./Message";
import { SafeUser } from "./User";

export type Chat = {
  id: number;
  name: string;
  sentAt: string;
  type: 'PRIVATE' | 'GROUP';
  members: SafeUser[];
  lastMessage: Message | null;
}
