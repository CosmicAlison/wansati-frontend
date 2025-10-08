import { Chat } from "./Chat";
import { User } from "./User";


export type Message = {
  id: number;
  sentAt: string;
  sender: User;
  content: string;
  chat?: Chat;
};