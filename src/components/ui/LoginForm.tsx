"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { authenticate } from "@/app/lib/actions";
import { useActionState } from "react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

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
          Welcome Back, Sister 🌸
        </h1>
        <p className="text-[var(--light-grey)] mb-6 text-center text-sm">
          Log in to continue your journey of connection, growth, and empowerment.
        </p>

        <form action={formAction} className="w-full space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <AtSymbolIcon className="absolute left-3 top-2.5 h-[18px] w-[18px] text-gray-500" />
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="amina@example.com"
                className="w-full border border-gray-200 rounded-xl px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <KeyIcon className="absolute left-3 top-2.5 h-[18px] w-[18px] text-gray-500" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--dark-purple)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-[var(--dark-purple)] hover:underline"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={callbackUrl} />

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isPending}
            className="mt-2 w-full bg-[var(--dark-purple)] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-800 transition"
          >
            Log in
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>

          {errorMessage && (
            <div className="flex items-center gap-2 mt-3 text-red-500 text-sm">
              <ExclamationCircleIcon className="h-5 w-5" />
              <p>{errorMessage}</p>
            </div>
          )}
        </form>

        <div className="w-full flex justify-between items-center text-sm text-gray-600 mt-5">
          <a
            href="/auth/signup"
            className="text-[var(--dark-purple)] font-medium hover:underline"
          >
            Create account
          </a>
          <a
            href="/auth/reset-password"
            className="text-[var(--dark-purple)] font-medium hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </motion.div>
    </main>
  );
}
