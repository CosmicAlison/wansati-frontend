"use client";
import { useEffect, useState } from "react";
import { useChatService } from "@/lib/ChatService";
import ChatList from "@/components/ui/ChatList";
import { Chat } from "@/types/Chat";

export default function Messages() {
  const [chats, setChats] = useState<Chat[]>([]);
  const { getUserChats } = useChatService();

  useEffect(() => {
    getUserChats().then(setChats).catch(console.error);
  }, []);

  return <ChatList chats={chats} />;
}
