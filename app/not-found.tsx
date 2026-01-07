"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cocoa-950 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cocoa-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="font-display text-9xl text-gold-500 mb-4 opacity-80">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-serif text-cream-50 mb-6">
          Page Not Found
        </h2>
        <p className="text-cream-200/60 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for doesn't exist or has been moved. Let's
          get you back on track.
        </p>

        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>

        <div className="mt-16 text-gold-500/40 font-display text-xl">
          EpicVibeCoder
        </div>
      </motion.div>
    </div>
  );
}
