
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PostComment } from "@/types/Post";

export interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  comments: PostComment[];
  onAddComment?: (content: string) => void;
}

export default function CommentsModal({
  isOpen,
  onClose,
  comments,
  onAddComment,
}: CommentsModalProps) {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    if (onAddComment) onAddComment(newComment.trim());
    setNewComment("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl w-full max-w-md h-[70vh] flex flex-col overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[var(--dark-purple)]">
                Comments
              </h2>
              <button onClick={onClose}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Comments list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {comments.length === 0 && (
                <p className="text-gray-400 text-sm">No comments yet.</p>
              )}
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 items-start">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={comment.author.profileUrl || "/images/avatars/default.png"}
                      alt={comment.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--dark-purple)]">
                      {comment.author.name}
                    </p>
                    <p className="text-sm text-gray-600">{comment.content}</p>
                    <p className="text-xs text-gray-400 mt-1">{comment.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add comment */}
            <div className="border-t border-gray-200 p-4 flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddComment();
                }}
              />
              <button
                onClick={handleAddComment}
                className="bg-[var(--dark-purple)] text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-800"
              >
                Post
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
