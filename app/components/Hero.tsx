"use client";

import { motion } from "framer-motion";
import chocolateDrip from "../assets/chocolateDrip.svg";
import Button from "./ui/Button";
// Note: We might need to adjust import path depending on where assets are.
// page.tsx imported from "./assets/chocolateDrip.svg" which implies app/assets/ if page is in app/

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cocoa-950">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-cocoa-mesh opacity-60 mix-blend-soft-light" />

      {/* Floating Elements (Abstract Chocolate Chunks/Squares) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 bg-cocoa-600/20 rounded-xl backdrop-blur-sm border border-white/5"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-10 w-32 h-32 bg-gold-700/10 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="opacity-100 transform-none">
          <h2 className="font-display text-gold-500 text-2xl md:text-3xl mb-4 tracking-wide">
            Hello, I am
          </h2>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-cream-50 mb-6 leading-tight">
            Mir Ashiqul <br />
            <span className="text-gradient-gold">Hossain</span>
          </h1>

          <p className="text-cream-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Transforming complex problems into elegant, high-performance web
            experiences. Specializing in modern full-stack development.
          </p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#projects">
              <Button className="text-lg px-10 py-4">View My Work</Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Chocolate Drip Overlay (Top) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute top-0 left-0 w-full pointer-events-none opacity-40 mix-blend-overlay"
      >
        {/* We can use the SVG here if we want, or just a CSS shape */}
        <div className="w-full h-32 bg-gradient-to-b from-cocoa-900 to-transparent" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-500/50"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
}
