
import { auth } from "@/auth";
import { get, post } from "@/lib/Api";
import { Chat } from "@/types/Chat";

export async function getUserChatsServer(): Promise<Chat[]> {
  const session = await auth();
  if (!session?.user) return [];
  return get<Chat[]>(`/chat/${session.user.id}`);
}

export async function createPrivateChatServer(otherUserId: number): Promise<Chat> {
  const session = await auth();
  if (!session?.user) throw new Error("Not authenticated");
  return post<Chat>(`/chat/private?userId1=${session.user.id}&userId2=${otherUserId}`, {});
}
