"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cocoa-950">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-cocoa-mesh opacity-60 mix-blend-soft-light" />

      {/* Floating Elements (Abstract Chocolate Chunks/Squares) */}
      {isMounted &&
        FLOATING_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, item.yOffset, 0],
              rotate: [0, item.rotate, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              width: item.size,
              height: item.size,
            }}
            className={`absolute ${item.className} backdrop-blur-sm border border-white/5 pointer-events-none`}
          />
        ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="opacity-100 transform-none">
          <h2 className="font-display text-gold-500 text-2xl md:text-3xl mb-4 tracking-wide">
            Hello, I am
          </h2>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-cream-50 mb-6 leading-tight">
            EpicVibe
            <br />
            <span className="text-gradient-gold">Coder</span>
          </h1>
          Full-stack developer with practical experience in web, mobile, and
          blockchain development. Skilled in React, Next.js, Node.js, NestJS,
          and Android development, with a strong interest in building secure,
          scalable applications.
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
      {isMounted && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute top-0 left-0 w-full pointer-events-none opacity-40 mix-blend-overlay"
        >
          {/* We can use the SVG here if we want, or just a CSS shape */}
          <div className="w-full h-32 bg-gradient-to-b from-cocoa-900 to-transparent" />
        </motion.div>
      )}

      {/* Scroll Indicator */}
      {isMounted && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-500/50"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent" />
        </motion.div>
      )}
    </section>
  );
}

const FLOATING_ITEMS = [
  // Left Side
  {
    top: "10%",
    left: "5%",
    size: 80,
    duration: 7,
    delay: 0,
    rotate: 10,
    yOffset: -20,
    className: "bg-cocoa-600/20 rounded-xl",
  },
  {
    top: "25%",
    left: "15%",
    size: 60,
    duration: 8,
    delay: 1,
    rotate: -15,
    yOffset: 30,
    className: "bg-gold-700/10 rounded-lg",
  },
  {
    top: "45%",
    left: "8%",
    size: 40,
    duration: 6,
    delay: 2,
    rotate: 20,
    yOffset: -15,
    className: "bg-cocoa-500/15 rounded-xl",
  },
  {
    top: "65%",
    left: "12%",
    size: 70,
    duration: 9,
    delay: 0.5,
    rotate: -10,
    yOffset: 25,
    className: "bg-gold-600/10 rounded-2xl",
  },
  {
    top: "85%",
    left: "4%",
    size: 50,
    duration: 7.5,
    delay: 1.5,
    rotate: 5,
    yOffset: -25,
    className: "bg-cocoa-700/20 rounded-lg",
  },
  // Right Side
  {
    top: "15%",
    right: "8%",
    size: 90,
    duration: 8.5,
    delay: 0.2,
    rotate: -8,
    yOffset: 20,
    className: "bg-cocoa-600/15 rounded-3xl",
  },
  {
    top: "35%",
    right: "18%",
    size: 50,
    duration: 6.5,
    delay: 1.2,
    rotate: 15,
    yOffset: -30,
    className: "bg-gold-500/10 rounded-xl",
  },
  {
    top: "55%",
    right: "6%",
    size: 75,
    duration: 9.5,
    delay: 2.2,
    rotate: -12,
    yOffset: 25,
    className: "bg-cocoa-500/20 rounded-2xl",
  },
  {
    top: "75%",
    right: "15%",
    size: 45,
    duration: 7,
    delay: 0.8,
    rotate: 8,
    yOffset: -18,
    className: "bg-gold-700/15 rounded-lg",
  },
  {
    top: "90%",
    right: "5%",
    size: 65,
    duration: 8,
    delay: 1.8,
    rotate: -20,
    yOffset: 22,
    className: "bg-cocoa-600/10 rounded-xl",
  },
  // Center / Spread
  {
    top: "5%",
    left: "40%",
    size: 30,
    duration: 10,
    delay: 0.5,
    rotate: 45,
    yOffset: 15,
    className: "bg-cream-500/10 rounded-lg",
  },
  {
    top: "12%",
    right: "35%",
    size: 35,
    duration: 9,
    delay: 2.5,
    rotate: -45,
    yOffset: -15,
    className: "bg-gold-400/10 rounded-lg",
  },
  {
    bottom: "15%",
    left: "35%",
    size: 40,
    duration: 8,
    delay: 1.5,
    rotate: 30,
    yOffset: 20,
    className: "bg-cocoa-400/15 rounded-xl",
  },
  {
    bottom: "8%",
    right: "40%",
    size: 55,
    duration: 7,
    delay: 0.3,
    rotate: -30,
    yOffset: -20,
    className: "bg-gold-600/10 rounded-2xl",
  },
  // Extra fillers for density
  {
    top: "30%",
    left: "3%",
    size: 25,
    duration: 11,
    delay: 3,
    rotate: 60,
    yOffset: 40,
    className: "bg-cocoa-800/20 rounded-md",
  },
  {
    bottom: "40%",
    right: "2%",
    size: 28,
    duration: 12,
    delay: 0,
    rotate: -60,
    yOffset: -40,
    className: "bg-gold-800/10 rounded-md",
  },
  {
    top: "50%",
    left: "90%",
    size: 20,
    duration: 13,
    delay: 1,
    rotate: 180,
    yOffset: 50,
    className: "bg-cream-100/10 rounded",
  },
  {
    top: "20%",
    left: "80%",
    size: 22,
    duration: 14,
    delay: 2,
    rotate: -180,
    yOffset: -50,
    className: "bg-cocoa-300/10 rounded",
  },
  {
    bottom: "25%",
    right: "85%",
    size: 24,
    duration: 15,
    delay: 4,
    rotate: 90,
    yOffset: 60,
    className: "bg-gold-300/10 rounded",
  },
  {
    top: "40%",
    left: "60%",
    size: 18,
    duration: 16,
    delay: 5,
    rotate: -90,
    yOffset: -60,
    className: "bg-cocoa-400/5 rounded",
  },
];
