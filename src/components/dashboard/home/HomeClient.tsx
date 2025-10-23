"use client";

import { Users, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import type { SafeUser } from "@/types/User";

export default function HomeClient({ user }: { user?: SafeUser }) {
  const connectionsCount = 12;
  const messagesCount = 3;
  const pendingMatches = 5;

  return (
    <div className="grid h-screen w-full grid-cols-3 gap-0">
      {/* Left panel: Welcome & snapshot */}
      <div className="p-6 border-r border-[var(--light-grey)] bg-[var(--off-white)] flex flex-col justify-start">
        <h1 className="text-[var(--dark-purple)] text-xl font-bold mb-4">
          Welcome, {user?.name || "User"}!
        </h1>

        <div className="space-y-4">
          {/* Snapshot */}
          <div className="bg-[var(--secondary-bg)] rounded-2xl p-4">
            <p className="text-sm text-[var(--light-grey)] mb-2">Your stats</p>
            <ul className="space-y-1 text-[var(--dark-purple)] text-sm">
              <li>Connections: {connectionsCount}</li>
              <li>New messages: {messagesCount}</li>
              <li>Pending matches: {pendingMatches}</li>
            </ul>
          </div>

          {/* Profile update prompt */}
          <div className="bg-[var(--secondary-bg)] rounded-2xl p-4">
            <p className="text-sm text-[var(--dark-purple)]">
              Increase your visibility: <span className="underline cursor-pointer">Update your profile</span>
            </p>
          </div>
        </div>
      </div>

      {/* Center panel: Quick actions */}
      <div className="col-span-2 flex flex-col items-center justify-center bg-[var(--secondary-bg)]">
        <div className="w-[420px] flex flex-col gap-4">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex items-center w-full p-4 bg-[var(--off-white)] rounded-3xl shadow-lg hover:bg-[var(--dark-purple)] hover:text-white transition-colors justify-between"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" /> View Matches
            </div>
            <span className="text-sm text-[var(--light-grey)]">Go to dashboard</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex items-center w-full p-4 bg-[var(--off-white)] rounded-3xl shadow-lg hover:bg-[var(--dark-purple)] hover:text-white transition-colors justify-between"
          >
            <div className="flex items-center gap-2">
              <Newspaper className="w-5 h-5" /> Explore Feed
            </div>
            <span className="text-sm text-[var(--light-grey)]">Go to feed</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
