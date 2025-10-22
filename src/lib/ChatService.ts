"use client";

import { Chat } from "@/types/Chat";
import { useRouter } from "next/navigation";

export function useChatService() {

  const router = useRouter();
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

  async function createOrGetChat(otherUserId: number) {
    // Call your backend endpoint that checks/creates a chat
    const res = await fetch("/api/chat/create-or-get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ targetUserId: otherUserId }),
    });

    if (!res.ok) throw new Error("Failed to create or get chat");

    const chat: Chat = await res.json();

    // Navigate to chat page
    router.push(`/dashboard/messages/${chat.id}`);
  }

  return { getUserChats, createPrivateChat, createOrGetChat};
}
