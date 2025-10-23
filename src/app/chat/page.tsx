"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useChatService } from "@/lib/ChatService";
import { Message } from "@/types/Message";

interface ChatPageProps {
  params: { chatId: string };
}

export default function ChatPage({ params }: ChatPageProps) {
  const { getUserChats } = useChatService(); // optional, can fetch user info too
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch(`/api/chat/${params.chatId}/messages`);
      if (res.ok) {
        const data: Message[] = await res.json();
        setMessages(data);
      }
    }

    fetchMessages();
  }, [params.chatId]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const res = await fetch(`/api/chat/${params.chatId}/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: input }),
    });

    if (res.ok) {
      const newMessage: Message = await res.json();
      setMessages((prev) => [...prev, newMessage]);
      setInput("");
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-[#FAF7FD] to-[#FDFBFF]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/avatars/peer1.png"
              alt="Chat Avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[var(--dark-purple)]">
              Chat with Aisha K.
            </h1>
            <p className="text-xs text-gray-400">Mentor • UX Designer</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.isMe ? "justify-end" : "justify-start"
            }`}
          >
            {!msg.isMe && (
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={msg.author.profileUrl || "/images/avatars/default.png"}
                  alt={msg.author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            )}
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                msg.isMe
                  ? "bg-[var(--dark-purple)] text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm outline-none placeholder-gray-400"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="w-10 h-10 bg-[var(--dark-purple)] text-white rounded-full flex items-center justify-center hover:bg-purple-800"
        >
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </main>
  );
}
