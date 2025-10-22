"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Briefcase, Users, Filter, Search } from "lucide-react";
import Image from "next/image";
import ProfileModal from "@/components/ui/ProfileModal";
import SearchModal from "@/components/ui/SearchModal";
import { SafeUser } from "@/types/User";

const mockProfiles = [
  {
    id: 1,
    name: "Lerato M.",
    username: "Lerato M.",
    role: "Product Manager",
    type: "Mentor",
    location: "Cape Town, ZA",
    bio: "Helping women transition into tech PM roles with confidence.",
    profileUrl: "/images/avatars/mentor1.png",
    createdAt: "2023-01-15T10:00:00Z",
    interests: [],
    email: "",
    certifications: [],
    educationHistory: [],
    employmentHistory: [],
    skills: []
  },
  {
    id: 2,
    name: "Aisha K.",
    username: "Aisha K.",
    role: "UX Designer",
    type: "Peer",
    location: "Maputo, MZ",
    bio: "Building human-centered designs with heart and purpose.",
    profileUrl: "/images/avatars/peer1.png",
    createdAt: "2023-01-15T10:00:00Z",
    interests: [],
    email: "",
    certifications: [],
    educationHistory: [],
    employmentHistory: [],
    skills: []
  },
  {
    id: 3,
    name: "Nadia S.",
    username: "Nadia S.",
    role: "Frontend Developer",
    type: "Mentee",
    location: "Mauritius",
    bio: "Eager to grow into full-stack dev and uplift others along the way.",
    profileUrl: "/images/avatars/mentee1.png",
    createdAt: "2023-01-15T10:00:00Z",
    interests: [],
    email: "",
    certifications: [],
    educationHistory: [],
    employmentHistory: [],
    skills: []
  },
  {
    id: 4,
    name: "Tanya L.",
    username: "Tanya L.",
    role: "Marketing Strategist",
    type: "Peer",
    location: "Nairobi, KE",
    bio: "Passionate about brand storytelling and women's leadership.",
    profileUrl: "/images/avatars/peer2.png",
    createdAt: "2023-01-15T10:00:00Z",
    interests: [],
    email: "",
    certifications: [],
    educationHistory: [],
    employmentHistory: [],
    skills: []
  },
];

export default function DiscoverPage() {
  const [index, setIndex] = useState(0);
  const [selectedUser, setSelectedUser] = useState<SafeUser>();
  const [openProfile, setOpenProfile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const profile = mockProfiles[index];
  const nextProfile = () => setIndex((i) => (i + 1) % mockProfiles.length);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF7FD] to-[#FDFBFF] flex flex-col items-center p-6">
      <header className="w-full max-w-3xl flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--dark-purple)]">
          Discover Sisters
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpenSearch(true)}
            className="text-[var(--dark-purple)] hover:opacity-70"
            aria-label="Search profiles"
          >
            <Search className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 text-sm text-[var(--dark-purple)] font-medium hover:opacity-70">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </header>

      {/* MATCHES SECTION */}
      <section className="w-full max-w-3xl mb-6">
        <h2 className="text-sm font-semibold text-[var(--dark-purple)] mb-3">
          Your Matches
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
          {mockProfiles.map((user) => (
            <div
              key={user.id}
              onClick={() => {
                setSelectedUser(user);
                setOpenProfile(true);
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--dark-purple)] hover:ring-purple-600 transition-all">
                <Image
                  src={user.profileUrl}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs mt-2 text-gray-700 font-medium truncate w-16 text-center">
                {user.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* DISCOVER CARD */}
      <motion.section
        key={profile.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm bg-white shadow-md rounded-2xl overflow-hidden flex flex-col items-center p-5"
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden mt-3">
          <Image
            src={profile.profileUrl}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mt-5">
          <h2 className="text-lg font-semibold text-[var(--dark-purple)]">
            {profile.name}
          </h2>
          <p className="text-sm text-[var(--light-grey)]">{profile.role}</p>
          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
              profile.type === "Mentor"
                ? "bg-purple-100 text-purple-700"
                : profile.type === "Peer"
                ? "bg-pink-100 text-pink-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {profile.type}
          </span>
          <p className="mt-3 text-sm text-gray-600">{profile.bio}</p>
          <p className="mt-1 text-xs text-gray-400">{profile.location}</p>
        </div>

        <div className="flex justify-center gap-4 mt-6 mb-2">
          <button
            onClick={nextProfile}
            className="px-6 py-2 rounded-full bg-[var(--off-white)] text-[var(--dark-purple)] hover:bg-purple-50 font-medium text-sm"
          >
            Skip
          </button>
          <button
            onClick={nextProfile}
            className="px-6 py-2 rounded-full bg-[var(--dark-purple)] text-white hover:bg-purple-800 font-medium text-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Connect
          </button>
        </div>
      </motion.section>

      {/* FOOTER NAV */}
      <footer className="mt-10 w-full max-w-3xl flex justify-around text-[var(--dark-purple)]">
        <div className="flex flex-col items-center">
          <Users className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Discover</span>
        </div>
        <div className="flex flex-col items-center opacity-60 hover:opacity-100 cursor-pointer">
          <Briefcase className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Jobs</span>
        </div>
      </footer>

      {/* PROFILE MODAL */}
      {selectedUser && (
        <ProfileModal
          isOpen={openProfile}
          onClose={() => setOpenProfile(false)}
          user={selectedUser}
        />
      )}

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {openSearch && (
          <SearchModal
            isOpen={openSearch}
            onClose={() => setOpenSearch(false)}
            profiles={mockProfiles}
            onSelect={(user : SafeUser) => {
              setSelectedUser(user);
              setOpenProfile(true);
              setOpenSearch(false);
            }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
