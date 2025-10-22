"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Reset password for", formData.email);
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
          Reset your password
        </h1>
        <p className="text-[var(--light-grey)] mb-6 text-center text-sm">
          Enter your email and create a new password to regain access.
        </p>

        <form onSubmit={handleReset} className="w-full flex flex-col gap-4">
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
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
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

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                required
                placeholder="••••••••"
                onChange={handleChange}
                value={formData.confirmPassword}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-4 bg-[var(--dark-purple)] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-800 transition"
          >
            Reset Password
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Remembered your password?{" "}
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
