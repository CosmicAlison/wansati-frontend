"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { SafeUser } from "@/types/User";
import { useChatService } from "@/lib/ChatService";

export interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: SafeUser;
}

export default function ProfileModal({
  isOpen,
  onClose,
  user,
}: ProfileModalProps) {
  const { createOrGetChat } = useChatService();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <Image
                src={user.profileUrl || "/images/avatars/default.png"}
                alt={user.name}
                width={90}
                height={90}
                className="rounded-full object-cover border-4 border-[#EDE9F8]"
              />
              <h2 className="mt-3 text-xl font-semibold text-[var(--dark-purple)]">
                {user.name}
              </h2>
              <p className="text-gray-600 text-sm">{user.role}</p>
              <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                <MapPin className="w-3 h-3" />
                <span>{user.location}</span>
              </div>
            </div>

            {user.bio && (
              <p className="text-gray-700 text-sm mt-5 leading-relaxed border-t border-gray-100 pt-4">
                {user.bio}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {user.interests?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#F3EAFD] text-[var(--dark-purple)] text-xs px-3 py-1.5 rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <Button
                onClick={() => createOrGetChat(user.id)}
                className="rounded-full px-5 py-2 text-sm border-[var(--dark-purple)] text-[var(--dark-purple)] hover:bg-[#F5F0FC]"
              >
                Message
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
