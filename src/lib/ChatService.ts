"use client";

import { Chat } from "@/types/Chat";

export function useChatService() {
  async function getUserChats(): Promise<Chat[]> {
    const res = await fetch("/api/chat");
    if (!res.ok) throw new Error("Failed to fetch chats");
    return res.json();
  }

  async function createPrivateChat(otherUserId: number): Promise<Chat> {
    const res = await fetch(`/api/chat/private?userId2=${otherUserId}`, {
      method: "POST",
    });
    if (!res.ok) throw new Error("Failed to create chat");
    return res.json();
  }

  return { getUserChats, createPrivateChat };
}
