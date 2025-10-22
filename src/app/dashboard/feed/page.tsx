"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { SafeUser } from "@/types/User";

type Post = {
  id: number;
  author: SafeUser;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  createdAt: string;
};

const mockFeed: Post[] = [
  {
    id: 1,
    author: {
      name: "Thandi N.",
      role: "Software Engineer • Johannesburg",
      profileUrl: "/images/avatars/peer2.png",
      username: "thandi.n",
      id: 2,
      createdAt: "",
      email: "",
    },
    content:
      "Just got promoted to mid-level dev 🎉 It’s been a wild journey — from learning late nights to imposter syndrome. For any sis feeling stuck — you *will* get there. 💜",
    likes: 48,
    comments: 12,
    createdAt: "2h ago",
  },
  {
    id: 2,
    author: {
      name: "Amina S.",
      role: "HR Manager • Nairobi",
      profileUrl: "/images/avatars/peer2.png",
      username: "thandi.n",
      id: 2,
      createdAt: "",
      email: "",
    },
    content:
      "Our company just opened remote roles in Kenya and Mauritius 🇰🇪🇲🇺 — full-stack, marketing, and design. Happy to refer Wansati sisters first!",
    image: "/images/posts/hiring.png",
    likes: 73,
    comments: 22,
    createdAt: "5h ago",
  },
  {
    id: 3,
    author: {
      name: "Fatima K.",
      role: "Product Designer • Lagos",
      profileUrl: "/images/avatars/peer2.png",
      username: "thandi.n",
      id: 2,
      createdAt: "",
      email: "",
    },
    content:
      "What’s the most effective way you’ve improved your salary negotiation confidence? I freeze up every time. 😭 Any tips from experienced sisters?",
    likes: 34,
    comments: 19,
    createdAt: "1d ago",
  },
];

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(mockFeed);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    const temp = {
      id: Date.now(),
      author: {
          name: "Fatima K.",
          role: "Product Designer • Lagos",
          profileUrl: "/images/avatars/peer2.png",
          username: "thandi.n",
          id: 2,
          createdAt: "",
          email: "",
      },
      content: newPost,
      likes: 0,
      comments: 0,
      createdAt: "Just now",
    };
    setPosts([temp, ...posts]);
    setNewPost("");
  };

  return (
    <main className="min-h-screen bg-[#FAF8FD] flex justify-center p-4">
      <div className="w-full max-w-2xl">
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-5 mb-5"
        >
          <div className="flex gap-3 items-start">
            <Image
              src="/images/avatars/default.png"
              alt="User"
              width={45}
              height={45}
              className="rounded-full object-cover"
            />
            <textarea
              placeholder="Share a win, a lesson, or something on your mind..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full resize-none outline-none text-sm text-gray-700 bg-transparent"
              rows={3}
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="flex items-center gap-1 text-gray-500 text-sm hover:text-purple-700">
              <ImageIcon className="w-4 h-4" /> Add Image
            </button>
            <button
              onClick={handlePost}
              className="px-4 py-2 bg-[var(--dark-purple)] text-white text-sm font-medium rounded-full hover:bg-purple-800"
            >
              Post
            </button>
          </div>
        </motion.section>

        {posts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-5 mb-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={post.author.profileUrl || "https://via.placeholder.com/150"}
                alt={post.author.name}
                width={45}
                height={45}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[var(--dark-purple)] text-sm">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
                <p className="text-[10px] text-gray-400 mt-1">
                  {post.createdAt}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed mb-3">
              {post.content}
            </p>

            {post.image && (
              <div className="rounded-xl overflow-hidden mb-3">
                <Image
                  src={post.image}
                  alt="Post image"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="flex gap-6 text-gray-500 text-sm mt-2">
              <button className="flex items-center gap-1 hover:text-purple-700">
                <Heart className="w-4 h-4" /> {post.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-purple-700">
                <MessageCircle className="w-4 h-4" /> {post.comments}
              </button>
              <button className="flex items-center gap-1 hover:text-purple-700">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
