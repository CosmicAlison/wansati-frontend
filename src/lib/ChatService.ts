"use client";

import { Chat } from "@/types/Chat";
import { useRouter } from "next/navigation";
import { get, post } from "@/lib/Api";

export function useChatService() {
  const router = useRouter();

  // Fetch all user chats
  async function getUserChats(): Promise<Chat[]> {
    return get<Chat[]>("/chat");
  }

  // Create a private chat with another user
  async function createPrivateChat(otherUserId: number): Promise<Chat> {
    return post<Chat>(`/chat/private?userId2=${otherUserId}`, {});
  }

  // Create or get an existing chat, then navigate to it
  async function createOrGetChat(otherUserId: number) {
    const chat = await post<Chat>("/chat/create-or-get", { targetUserId: otherUserId });
    router.push(`/dashboard/messages/${chat.id}`);
  }

  return { getUserChats, createPrivateChat, createOrGetChat };
}
