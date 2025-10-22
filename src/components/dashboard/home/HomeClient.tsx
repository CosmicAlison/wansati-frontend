
"use client";
import { Sparkles, Users, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import type { User } from '@/types/User';

export default function HomeClient({user}: {user?: User}) {

  return (
    <div className="grid h-screen w-full grid-cols-3 gap-0">
      {/* Left section — summary & actions */}
      <div className="p-4 border-r border-[var(--light-grey)] bg-[var(--off-white)]">
        <h1 className="text-[var(--dark-purple)] text-xl font-bold mb-4">Welcome, {user?.name || 'User'}</h1>
        
        <div className="space-y-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex items-center w-full p-3 bg-[var(--secondary-bg)] rounded-2xl hover:bg-[var(--dark-purple)] hover:text-white transition-colors"
          >
            <Sparkles className="w-5 h-5 mr-2" /> Start Swiping
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex items-center w-full p-3 bg-[var(--secondary-bg)] rounded-2xl hover:bg-[var(--dark-purple)] hover:text-white transition-colors"
          >
            <Users className="w-5 h-5 mr-2" /> View Matches
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex items-center w-full p-3 bg-[var(--secondary-bg)] rounded-2xl hover:bg-[var(--dark-purple)] hover:text-white transition-colors"
          >
            <Newspaper className="w-5 h-5 mr-2" /> Feed
          </motion.button>
        </div>
      </div>

      {/* Middle section — live swiping area */}
      <div className="col-span-2 flex flex-col items-center justify-center bg-[var(--secondary-bg)]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-[420px] h-[520px] bg-[var(--off-white)] rounded-3xl shadow-lg flex flex-col items-center justify-center"
        >
          <p className="text-[var(--dark-purple)] font-semibold mb-2">Swipe to Connect</p>
          <span className="text-[var(--light-grey)] text-sm">Find your next mentor, mentee, or peer</span>
        </motion.div>
      </div>

      {/* Optional right panel — trending posts or insights */}
      <div className="hidden lg:block border-l border-[var(--light-grey)] p-4 bg-[var(--off-white)]">
        <h2 className="text-[var(--dark-purple)] text-lg font-bold mb-2">Community Highlights</h2>
        <ul className="space-y-2">
          <li className="text-[var(--light-grey)] text-sm">💡 “Top mentorship moments this week”</li>
          <li className="text-[var(--light-grey)] text-sm">🔥 “Most active peers”</li>
          <li className="text-[var(--light-grey)] text-sm">🌍 “Community growing by 12% this month”</li>
        </ul>
      </div>
    </div>
  );
}
