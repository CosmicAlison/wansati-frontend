import { Chat } from "./Chat";
import { SafeUser} from "./User";


export type Message = {
  id: number;
  sentAt: string;
  author: SafeUser
  content: string;
  isMe: boolean;
  chat?: Chat;
};