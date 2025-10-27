"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Filter, Search } from "lucide-react";
import Image from "next/image";
import ProfileModal from "@/components/ui/ProfileModal";
import SearchModal from "@/components/ui/SearchModal";
import { SafeUser } from "@/types/User";
// import { useMatchService } from "@/lib/MatchService";

const mockProfiles: SafeUser[] = [
      {
      id: 2,
      username: "bella_marketing",
      name: "Bella Smith",
      email: "bella.marketing@example.com",
      role: "Marketing Associate",
      location: "New York",
      bio: "Digital marketer with a focus on SEO and content strategy.",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/bella_marketing.jpg",
      createdAt: "",
    },
    {
      id: 3,
      createdAt: "",
      username: "carla_backend",
      name: "Carla Mendes",
      email: "carla.backend@example.com",
      role: "Backend Developer",
      location: "Austin",
      bio: "Backend engineer specialized in Node.js and database design.",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/carla_backend.jpg",
    }
  ]; 




export default function DiscoverPage() {
  // const { getPotentialMatches, requestMatch } = useMatchService();
  const [profiles, setProfiles] = useState<SafeUser[]>([
    {
      id: 4,
      createdAt: "",
      username: "diana_branding",
      name: "Diana Lopez",
      email: "diana.branding@example.com",
      role: "Branding Specialist",
      location: "Los Angeles",
      bio: "Brand strategist and creative designer with a focus on visual identity.",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/diana_branding.jpg",
    },
    {
      id: 5,
      createdAt: "",
      username: "emma_frontend",
      name: "Emma Wong",
      email: "emma.frontend@example.com",
      role: "Frontend Engineer",
      location: "Seattle",
      bio: "Frontend developer with expertise in React, Vue, and UI/UX design.",
      profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/emma_frontend.jpg",
    },
  ]);
  const [index, setIndex] = useState(0);
  const [selectedUser, setSelectedUser] = useState<SafeUser>();
  const [openProfile, setOpenProfile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const profile = profiles[index];

  // Uncomment when API is ready
  /*
  useEffect(() => {
    async function fetchMatches() {
      try {
        setLoading(true);
        const data = await getPotentialMatches();
        setProfiles(data);
      } catch (err) {
        console.error("Failed to load potential matches", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, [getPotentialMatches]);
  */

  const nextProfile = () => setIndex((i) => (i + 1) % profiles.length);

  async function handleConnect() {
    if (!profile) return;
    // Uncomment when API is ready
    /*
    try {
      const res = await requestMatch(profile.id);
      if (res.matched) {
        console.log("You have a new match!", res.match);
      }
      nextProfile();
    } catch (err) {
      console.error("Error sending match request", err);
    }
    */
    nextProfile(); // just advance in fake mode
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500 text-sm">Loading profiles...</p>
      </main>
    );
  }

  if (!profiles.length) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500 text-sm">No potential matches found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF7FD] to-[#FDFBFF] flex flex-col items-center p-6">
      <header className="w-full max-w-3xl flex items-center justify-between mb-6 px-4">
        <div className="w-24"></div>
        <h1 className="text-xl font-bold text-[var(--dark-purple)] text-center">
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
          <button className="flex items-center gap-1 text-sm font-medium text-[var(--dark-purple)] hover:opacity-70">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </header>

      {/* MATCHES SECTION */}
      <section className="w-full flex items-center max-w-3xl mb-6">
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
                  src={user.profileUrl || "/images/default-avatar.png"}
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
      {profile && (
        <motion.section
          key={profile.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-sm bg-white shadow-md rounded-2xl overflow-hidden flex flex-col items-center p-5 z-10"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden mt-3">
            <Image
              src={profile.profileUrl || "/images/default-avatar.png"}
              alt={profile.name || "User"}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-lg font-semibold text-[var(--dark-purple)]">{profile.name}</h2>
            <p className="text-sm text-[var(--light-grey)]">{profile.role}</p>
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
              onClick={handleConnect}
              className="px-6 py-2 rounded-full bg-[var(--dark-purple)] text-white hover:bg-purple-800 font-medium text-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Connect
            </button>
          </div>
        </motion.section>
      )}

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
            profiles={profiles}
            onSelect={(user: SafeUser) => {
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
