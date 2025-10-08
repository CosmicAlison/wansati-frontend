'use client';

import { useAuth } from '@/contexts/AuthContexts';
import { get, post } from '@/libs/Api';
import { Chat } from '@/types/Chat';
import { redirect } from 'next/navigation';

export function useChatService() {
  const { user } = useAuth();

  if (!user) redirect("/login");

  async function getUserChats(): Promise<Chat[]> {
    return get<Chat[]>(`/chat/${user?.id}`);
  }

  async function createPrivateChat(otherUserId: number): Promise<Chat> {
    return post<Chat>(`/chat/private?userId1=${user?.id}&userId2=${otherUserId}`, {});
  }

  return {
    getUserChats,
    createPrivateChat,
  };
}
