
import {auth} from '../../auth';
import { get, post } from '@/libs/Api';
import { Chat } from '@/types/Chat';
import { redirect } from 'next/navigation';

export function useChatService() {


  async function getUserChats(): Promise<Chat[]> {
    const session = await auth();
    return get<Chat[]>(`/chat/${session?.user?.id}`);
  }

  async function createPrivateChat(otherUserId: number): Promise<Chat> {
    const session = await auth();
    return post<Chat>(`/chat/private?userId1=${session?.user?.id}&userId2=${otherUserId}`, {});
  }

  return {
    getUserChats,
    createPrivateChat,
  };
}
