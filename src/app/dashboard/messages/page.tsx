
import { Pen } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import ChatList from "@/components/ui/ChatList";
import { useChatService } from "@/libs/ChatService";
import { Suspense } from 'react';
import { auth } from "../../../../auth";

export default async function Messages() {
  const {getUserChats} = useChatService();
  return (
    <div className="grid h-screen w-full grid-cols-3 gap-0">
      <div>
        <section className="flex items-center justify-between">
          <h1 className="text-[var(--dark-purple)] text-xl p-3 font-bold">Chats</h1>
          <button className="p-2 cursor-pointer flex mr-2 bg-[var(--off-white)] w-8 h-8 rounded-full items-center justify-center"><Pen className="text-[var(--light-grey)] w-4 h-4"></Pen></button>
        </section>
        <div className="flex justify-center">
          <SearchBar/>
        </div>
        <section>
          <Suspense fallback={<div>Loading chats...</div>}><ChatList chats={getUserChats()}/></Suspense>
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