import { NextResponse } from "next/server";
import { getUserChatsServer } from "@/lib/server/ChatService";

export async function GET() {
  const chats = await getUserChatsServer();
  return NextResponse.json(chats);
}
