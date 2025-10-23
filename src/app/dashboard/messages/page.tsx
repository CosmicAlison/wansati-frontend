"use client";
import { useEffect, useState } from "react";
import { useChatService } from "@/lib/ChatService";
import ChatList from "@/components/ui/ChatList";
import { Chat } from "@/types/Chat";
import { SafeUser } from "@/types/User";
const alice: SafeUser = {
  id: 1,
  username: "alice_tech",
  name: "Alice Johnson",
  email: "alice.tech@example.com",
  role: "Software Engineer",
  location: "San Francisco",
  bio: "Full-stack developer passionate about React and Node.js.",
  profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/alice_tech.jpg",
  createdAt: "2025-10-23T08:31:12.902Z",
};

const bella: SafeUser = {
  id: 2,
  username: "bella_marketing",
  name: "Bella Smith",
  email: "bella.marketing@example.com",
  role: "Marketing Associate",
  location: "New York",
  bio: "Digital marketer with a focus on SEO and content strategy.",
  profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/bella_marketing.jpg",
  createdAt: "2025-10-23T08:31:12.902Z",
};

const carla: SafeUser = {
  id: 3,
  username: "carla_backend",
  name: "Carla Mendes",
  email: "carla.backend@example.com",
  role: "Backend Developer",
  location: "Austin",
  bio: "Backend engineer specialized in Node.js and database design.",
  profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/carla_backend.jpg",
  createdAt: "2025-10-23T10:41:44.980Z",
};

const diana: SafeUser = {
  id: 4,
  username: "diana_branding",
  name: "Diana Lopez",
  email: "diana.branding@example.com",
  role: "Branding Specialist",
  location: "Los Angeles",
  bio: "Brand strategist and creative designer with a focus on visual identity.",
  profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/diana_branding.jpg",
  createdAt: "2025-10-23T10:41:44.980Z",
};

const emma: SafeUser = {
  id: 5,
  username: "emma_frontend",
  name: "Emma Wong",
  email: "emma.frontend@example.com",
  role: "Frontend Engineer",
  location: "Seattle",
  bio: "Frontend developer with expertise in React, Vue, and UI/UX design.",
  profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/emma_frontend.jpg",
  createdAt: "2025-10-23T10:41:44.980Z",
};

export default function Messages() {
  const [chats, setChats] = useState<Chat[]>([
    {
    id: 1,
    name: "Chat with Bella",
    type: "PRIVATE",
    sentAt: "2025-10-23T12:15:00.000Z",
    members: [alice, bella],
    lastMessage: {
      id: 101,
      author: bella,
      content: "Hey Alice! How’s your project going?",
      sentAt: "2025-10-23T12:15:00.000Z",
      isMe: false,
    },
  },
  {
    id: 2,
    name: "Chat with Carla",
    type: "PRIVATE",
    sentAt: "2025-10-23T13:45:00.000Z",
    members: [alice, carla],
    lastMessage: {
      id: 102,
      author: alice,
      content: "Hi Carla, did you push the latest API changes?",
      sentAt: "2025-10-23T13:45:00.000Z",
      isMe: true,
    },
  },
  {
    id: 3,
    name: "Chat With Diana",
    type: "PRIVATE",
    sentAt: "2025-10-23T14:30:00.000Z",
    members: [alice, diana],
    lastMessage: {
      id: 103,
      author: diana,
      content: "Everyone, the new design mockups are ready for review!",
      sentAt: "2025-10-23T14:30:00.000Z",
      isMe: false,
    },
  },
  ]);
  //const { getUserChats } = useChatService();

  
  /*useEffect(() => {
    getUserChats().then(setChats).catch(console.error);
  }, []);*/

  return <ChatList chats={chats} />;
}
