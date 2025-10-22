"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // send signup data to backend here
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF7FD] to-[#FDFBFF] flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center"
      >
        <Image
          src="/images/logo.png"
          alt="Wansati Logo"
          width={80}
          height={80}
          className="mb-4"
        />
        <h1 className="text-2xl font-bold text-[var(--dark-purple)] mb-1">
          Create your Wansati account
        </h1>
        <p className="text-[var(--light-grey)] mb-6 text-center text-sm">
          Join a community of ambitious women empowering each other.
        </p>

        <form onSubmit={handleSignup} className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Amina S."
              onChange={handleChange}
              value={formData.name}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input
              name="username"
              type="text"
              required
              placeholder="amina_s"
              onChange={handleChange}
              value={formData.username}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="amina@example.com"
              onChange={handleChange}
              value={formData.email}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                onChange={handleChange}
                value={formData.password}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-4 bg-[var(--dark-purple)] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-800 transition"
          >
            Sign Up
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-[var(--dark-purple)] font-medium hover:underline"
          >
            Log in
          </a>
        </p>
      </motion.div>
    </main>
  );
}
