"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { SafeUser } from "@/types/User";
import ProfileModal from "@/components/ui/ProfileModal";
import { Post, PostComment } from "@/types/Post";
import CommentsModal from "@/components/ui/CommentsModal";

const mockFeed: Post[] = [
  {
    id: 1,
    author: {
      name: "Alice Johnson",
      role: "Software Engineer • Johannesburg",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/alice_tech.jpg",
      username: "alice_tech",
      id: 1,
      createdAt: "",
      email: "",
    },
    content:
      "Just got promoted to mid-level dev 🎉 It’s been a wild journey — from learning late nights to imposter syndrome. For any sis feeling stuck — you *will* get there. 💜",
    likes: 48,
    comments: [{id: 1, author: {
      name: "Bella Smith",
      role: "Marketing Associate",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/bella_marketing.jpg",
      username: "bella_marketing",
      id: 2,
      createdAt: "",
      email: "",
    }, content: "Congrats Alice! So proud of you!", createdAt: "1h ago"}, {id: 2, author: {
      name: "Diana Lopez",
      role: "Branding Specialist",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/diana_branding.jpg",
      username: "diana_branding",
      id: 4,
      createdAt: "",
      email: "",
    }, content: "Well deserved! Keep shining! ✨", createdAt: "2h ago"}],
    createdAt: "2h ago",
  },
  {
    id: 2,
    author: {
      name: "Bella Smith",
      role: "Marketing Associate",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/bella_marketing.jpg",
      username: "bella_marketing",
      id: 2,
      createdAt: "",
      email: "",
    },
    content:
      "Our company just opened remote roles in Kenya and Mauritius 🇰🇪🇲🇺 — full-stack, marketing, and design. Happy to refer Wansati sisters first!",
    image: "https://wansati.s3.ap-southeast-2.amazonaws.com/backdrop.jpg",
    likes: 73,
    comments: [],
    createdAt: "5h ago",
  },
];

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(mockFeed);
  const [newPost, setNewPost] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post>();
  const [openComments, setOpenComments] = useState(false);
  const [selectedUser, setSelectedUser] = useState<SafeUser>();
  const [openProfile, setOpenProfile] = useState(false);

  const handlePost = () => {
    if (!newPost.trim()) return;
    const temp = {
      id: Date.now(),
      author: {
          name: "Fatima K.",
          role: "Product Designer • Lagos",
          profileUrl: "/user.jpg",
          username: "thandi.n",
          id: 2,
          createdAt: "",
          email: "",
      },
      content: newPost,
      likes: 0,
      comments: [],
      createdAt: "Just now",
    };
    setPosts([temp, ...posts]);
    setNewPost("");
  };

    const handleNewComment = (content: string) => {
    if (!selectedPost) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === selectedPost.id) {
          const newComment: PostComment = {
            id: Date.now(),
            author: {
              id: 1, // replace with current user id
              name: "You", // replace with current user name
              username: "current.user",
              profileUrl: "/images/avatars/default.png",
              createdAt: new Date().toISOString(),
              email: "",
              role: "Member",
            },
            content,
            createdAt: "Just now",
          };
          return { ...post, comments: [...post.comments, newComment] };
        }
        return post;
      })
    );}

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
              src="/user.jpg"
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
            <div className="flex items-center gap-3 mb-3" onClick={()=>{setSelectedUser(post.author); setOpenProfile(true); ()=>{setSelectedPost(undefined); setOpenComments(false);}}}>
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
              <button className="flex items-center gap-1 hover:text-purple-700" onClick={()=>{setSelectedPost(post); setOpenComments(true);}}>
                <MessageCircle className="w-4 h-4" /> {post.comments.length}
              </button>
              <button className="flex items-center gap-1 hover:text-purple-700">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

        {/* PROFILE MODAL */}
        {selectedUser && (
          <ProfileModal
            isOpen={openProfile}
            onClose={() => setOpenProfile(false)}
            user={selectedUser}
          />
        )}

        {/* COMMENTS MODAL */}
        {selectedPost && (
          <CommentsModal
            comments={selectedPost?.comments}
            isOpen={openComments}
            onClose={() => setOpenComments(false)}
            onAddComment={handleNewComment}
            onProfileClick={(user) => {
              setSelectedUser(user);
              setOpenProfile(true);
            }}
          />
        )}
    </main>
  );
}
