"use client";
import { SafeUser } from "@/types/User";
import { motion } from "framer-motion";
import { X, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SearchModal({ isOpen, onClose, profiles, onSelect }: any) {
  const [query, setQuery] = useState("");

  const filtered = profiles.filter(
    (p: any) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.role.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-lg p-5"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[var(--dark-purple)]">
            Search Sisters
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name, role, or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <div className="max-h-72 overflow-y-auto no-scrollbar">
          {filtered.length > 0 ? (
            filtered.map((p: SafeUser) => (
              <div
                key={p.id}
                onClick={() => onSelect(p)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 cursor-pointer"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={p.profileUrl || "user.jpg"}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--dark-purple)]">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-500">{p.role}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-sm mt-6">
              No matches found.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
