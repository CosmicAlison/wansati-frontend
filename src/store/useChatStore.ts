import { create } from "zustand";
import { Chat } from "@/types/Chat";

interface ChatStore {
  chat: Chat | null;
  setChat: (chat: Chat) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chat: null,
  setChat: (chat) => set({ chat }),
  clearChat: () => set({ chat: null }),
}));