"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Save, Upload, User, Briefcase, GraduationCap, Heart, Edit3 } from "lucide-react";

export default function EditProfilePage() {
  const [profilePic, setProfilePic] = useState("/images/avatars/default.png");
  const [formData, setFormData] = useState({
    name: "Amina K.",
    role: "Product Manager",
    location: "Mauritius",
    bio: "Building spaces where women thrive. ✨",
    skills: "Leadership, UX Design, Mentorship",
    interests: "Startups, Career Growth, Women in Tech",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // call API here
    console.log("Saved profile:", formData);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePic(url);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8FD] flex justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-sm w-full max-w-2xl p-8"
      >
        <h1 className="text-[var(--dark-purple)] text-2xl font-bold mb-6">
          Edit Your Profile
        </h1>

        <section className="flex flex-col items-center mb-6">
          <div className="relative">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full object-cover border-4 border-[#EDE9F8]"
            />
            <label
              htmlFor="file-upload"
              className="absolute bottom-0 right-0 bg-[var(--dark-purple)] text-white p-2 rounded-full cursor-pointer hover:bg-purple-800 transition"
            >
              <Upload className="w-4 h-4" />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </div>
          <p className="text-gray-500 text-sm mt-2">Update your profile picture</p>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          <ProfileField
            icon={<User className="w-4 h-4 text-[var(--dark-purple)]" />}
            label="Full Name"
            value={formData.name}
            onChange={(v) => handleChange("name", v)}
          />
          <ProfileField
            icon={<Briefcase className="w-4 h-4 text-[var(--dark-purple)]" />}
            label="Current Role"
            value={formData.role}
            onChange={(v) => handleChange("role", v)}
          />
          <ProfileField
            icon={<Heart className="w-4 h-4 text-[var(--dark-purple)]" />}
            label="Bio"
            value={formData.bio}
            multiline
            onChange={(v) => handleChange("bio", v)}
          />
          <ProfileField
            icon={<GraduationCap className="w-4 h-4 text-[var(--dark-purple)]" />}
            label="Skills"
            value={formData.skills}
            onChange={(v) => handleChange("skills", v)}
          />
          <ProfileField
            icon={<Edit3 className="w-4 h-4 text-[var(--dark-purple)]" />}
            label="Interests"
            value={formData.interests}
            onChange={(v) => handleChange("interests", v)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex justify-end"
        >
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-[var(--dark-purple)] text-white px-5 py-2.5 rounded-full font-medium hover:bg-purple-800 transition"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}

function ProfileField({
  icon,
  label,
  value,
  onChange,
  multiline = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (val: string) => void;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-[var(--dark-purple)] mb-1">
        {icon} {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 focus:border-[var(--dark-purple)] focus:ring-1 focus:ring-[var(--dark-purple)] outline-none text-sm p-3 text-gray-700 resize-none transition"
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 focus:border-[var(--dark-purple)] focus:ring-1 focus:ring-[var(--dark-purple)] outline-none text-sm p-3 text-gray-700 transition"
        />
      )}
    </div>
  );
}
