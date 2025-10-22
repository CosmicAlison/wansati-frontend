import { Chat } from "./Chat";
import { User } from "./User";


export type Message = {
  id: number;
  sentAt: string;
  author: User;
  content: string;
  isMe: boolean;
  chat?: Chat;
};