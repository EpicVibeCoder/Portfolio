"use client";

import clsx from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative px-8 py-3 overflow-hidden font-bold rounded-full transition-all duration-300 transform font-serif";
  const variants = {
    primary:
      "bg-gradient-to-r from-gold-600 to-gold-700 text-white shadow-lg hover:bg-gradient-to-r hover:from-gold-500 hover:to-gold-600 hover:scale-105 hover:shadow-gold-500/30",
    outline:
      "border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10 hover:shadow-lg hover:shadow-gold-500/20",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
