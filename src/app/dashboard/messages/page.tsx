"use client";
import { Pen } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import ChatList from "@/components/ui/ChatList";
import { useChatService } from "@/lib/ChatService";
import { useEffect, useState } from "react";
import type { Chat } from "@/types/Chat"; 

export default function Messages() {
  const { getUserChats } = useChatService();

  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const data = await getUserChats();
        setChats(data);
      } catch (err) {
        console.error("Failed to load chats", err);
      } finally {
        setLoading(false);
      }
    };
    loadChats();
  }, [getUserChats]);

  return (
    <div className="grid h-screen w-full grid-cols-3 gap-0">
      <div>
        <section className="flex items-center justify-between">
          <h1 className="text-[var(--dark-purple)] text-xl p-3 font-bold">Chats</h1>
          <button className="p-2 cursor-pointer flex mr-2 bg-[var(--off-white)] w-8 h-8 rounded-full items-center justify-center">
            <Pen className="text-[var(--light-grey)] w-4 h-4" />
          </button>
        </section>
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <section>
          {loading ? (
            <div className="p-3 text-[var(--light-grey)]">Loading chats...</div>
          ) : (
            <ChatList chats={chats} />
          )}
        </section>
      </div>
      <div className="col-span-2 border-l border-[var(--light-grey)] bg-[var(--secondary-bg)]">
        <section>
          <h1 className="text-[var(--dark-purple)] p-3 text-xl font-bold"></h1>
        </section>
        <section></section>
      </div>
    </div>
  );
}
