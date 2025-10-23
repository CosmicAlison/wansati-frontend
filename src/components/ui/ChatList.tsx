

import { Chat } from '@/types/Chat';
import { ChatProfilePic } from '@/utils/ChatProfilePic';
import { formatDate } from '@/utils/FormatDate';
import { useUserStore } from "@/store/useUserStore";
const session = useUserStore.getState();
export default function ChatList({ chats }: { chats: Chat[] }) {
  return (
    <main className=" min-h-full bg-gradient-to-b from-[#FAF7FD] to-[#FDFBFF] flex flex-col items-center p-6">
        <div className="max-w-[400px] min-h-full mb-6">
        {chats.map((chat) => (
        <button
            key={chat.id}
            className="w-full flex items-center gap-4 p-3 hover:bg-[var(--lilac)] transition text-left"
        >
            <ChatProfilePic chat={chat} currentUserId={session?.user?.id ?? 1} />
            <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-[var(--dark-purple)] truncate">{chat.name}</span>
                <span className="text-xs text-gray-500 whitespace-nowrap pl-2">{formatDate(chat.sentAt)}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{chat.lastMessage?.content}</p>
            </div>
        </button>
        ))}
        </div>
    </main>
  );
}
