"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asMotion?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  asMotion = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary:
      "bg-[var(--dark-purple)] text-white hover:bg-purple-800 focus:ring-purple-300",
    secondary:
      "bg-[var(--off-white)] text-[var(--dark-purple)] hover:bg-purple-50 focus:ring-purple-100",
    outline:
      "border border-[var(--dark-purple)] text-[var(--dark-purple)] hover:bg-purple-50 focus:ring-purple-200",
    ghost:
      "text-[var(--dark-purple)] hover:bg-purple-50 hover:text-purple-800",
  };

  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  if (asMotion) {
    return (
      <motion.button
        {...(props as HTMLMotionProps<"button">)}
        className={`${base} ${variants[variant]} ${sizes[size]}`}
        whileTap={{ scale: 0.96 }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}
