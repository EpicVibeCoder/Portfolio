"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

import { SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiAndroid, SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiGit } from "react-icons/si";

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative flex min-h-screen w-full items-start justify-center overflow-hidden bg-cocoa-950 py-32 md:h-screen md:items-center md:py-0" id="hero">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-cocoa-mesh opacity-60 mix-blend-soft-light" aria-hidden="true" />

            {/* Floating Icons (Tech Stacks) */}
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
                        }}
                        className={`pointer-events-none absolute z-0 text-cocoa-400/30 transition-colors duration-300 hover:text-cocoa-400/50`}
                    >
                        <item.Icon size={item.size} />
                    </motion.div>
                ))}

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
                <div className="transform-none opacity-100">
                    <h2 className="mb-2 font-display text-xl tracking-wide text-gold-500 md:mb-4 md:text-3xl">Hello, I am</h2>
                    <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-cream-50 md:mb-6 md:text-8xl">
                        EpicVibe
                        <br />
                        <span className="text-gradient-gold">Coder</span>
                    </h1>
                    <div className="mx-auto mb-6 max-w-2xl md:mb-8">
                        <h3 className="mb-3 font-display text-lg font-semibold leading-tight text-gold-400 md:mb-4 md:text-3xl">
                            <span className="text-gradient-gold">Vibe coding at the speed of AI.</span>
                            <br />
                            <span className="text-gold-500">Built to scale. Secured by design.</span>
                        </h3>
                        <p className="text-base leading-relaxed text-cream-100/80 md:text-xl">
                            {" "}
                            I’m a full-stack engineer who fuses AI-powered workflows with real engineering discipline. I use tools like Cursor and Antigravity to accelerate development, but every output is refined with deep knowledge of security, scalability, and architecture. I vibe code fast, but
                            I build smart—crafting production-ready applications across web, mobile, and blockchain that are secure, scalable, and battle-tested. AI boosts my speed. Engineering judgment guarantees quality. Rapid builds. Clean architecture. Strong security. Infinite vibes.
                        </p>
                    </div>
                    <motion.div className="flex flex-col items-center justify-center gap-4 md:flex-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <a href="#projects">
                            <Button className="px-10 py-4 text-lg">View My Work</Button>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Chocolate Drip Overlay (Top) */}
            {isMounted && (
                <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, type: "spring" }} className="pointer-events-none absolute left-0 top-0 w-full opacity-40 mix-blend-overlay">
                    {/* We can use the SVG here if we want, or just a CSS shape */}
                    <div className="h-32 w-full bg-gradient-to-b from-cocoa-900 to-transparent" />
                </motion.div>
            )}

            {/* Scroll Indicator */}
            {isMounted && (
                <motion.div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold-500/50 md:flex" animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="h-12 w-px bg-gradient-to-b from-gold-500 to-transparent" />
                </motion.div>
            )}
        </section>
    );
}

const FLOATING_ITEMS = [
    // Left Side
    {
        Icon: SiReact,
        top: "10%",
        left: "5%",
        size: 80,
        duration: 7,
        delay: 0,
        rotate: 10,
        yOffset: -20,
    },
    {
        Icon: SiNextdotjs,
        top: "25%",
        left: "15%",
        size: 60,
        duration: 8,
        delay: 1,
        rotate: -15,
        yOffset: 30,
    },
    {
        Icon: SiNodedotjs,
        top: "45%",
        left: "8%",
        size: 40,
        duration: 6,
        delay: 2,
        rotate: 20,
        yOffset: -15,
    },
    {
        Icon: SiNestjs,
        top: "65%",
        left: "12%",
        size: 70,
        duration: 9,
        delay: 0.5,
        rotate: -10,
        yOffset: 25,
    },
    {
        Icon: SiAndroid,
        top: "85%",
        left: "4%",
        size: 50,
        duration: 7.5,
        delay: 1.5,
        rotate: 5,
        yOffset: -25,
    },
    // Right Side
    {
        Icon: SiTypescript,
        top: "15%",
        right: "8%",
        size: 90,
        duration: 8.5,
        delay: 0.2,
        rotate: -8,
        yOffset: 20,
    },
    {
        Icon: SiJavascript,
        top: "35%",
        right: "18%",
        size: 50,
        duration: 6.5,
        delay: 1.2,
        rotate: 15,
        yOffset: -30,
    },
    {
        Icon: SiTailwindcss,
        top: "55%",
        right: "6%",
        size: 75,
        duration: 9.5,
        delay: 2.2,
        rotate: -12,
        yOffset: 25,
    },
    {
        Icon: SiPostgresql,
        top: "75%",
        right: "15%",
        size: 45,
        duration: 7,
        delay: 0.8,
        rotate: 8,
        yOffset: -18,
    },
    {
        Icon: SiGit,
        top: "90%",
        right: "5%",
        size: 65,
        duration: 8,
        delay: 1.8,
        rotate: -20,
        yOffset: 22,
    },
    // Center / Spread
    {
        Icon: SiReact, // Reuse
        top: "5%",
        left: "40%",
        size: 30,
        duration: 10,
        delay: 0.5,
        rotate: 45,
        yOffset: 15,
    },
    {
        Icon: SiNextdotjs, // Reuse
        top: "12%",
        right: "35%",
        size: 35,
        duration: 9,
        delay: 2.5,
        rotate: -45,
        yOffset: -15,
    },
    {
        Icon: SiNodedotjs, // Reuse
        bottom: "15%",
        left: "35%",
        size: 40,
        duration: 8,
        delay: 1.5,
        rotate: 30,
        yOffset: 20,
    },
    {
        Icon: SiNestjs, // Reuse
        bottom: "8%",
        right: "40%",
        size: 55,
        duration: 7,
        delay: 0.3,
        rotate: -30,
        yOffset: -20,
    },
    // Extra fillers for density
    {
        Icon: SiAndroid, // Reuse
        top: "30%",
        left: "3%",
        size: 25,
        duration: 11,
        delay: 3,
        rotate: 60,
        yOffset: 40,
    },
    {
        Icon: SiTypescript, // Reuse
        bottom: "40%",
        right: "2%",
        size: 28,
        duration: 12,
        delay: 0,
        rotate: -60,
        yOffset: -40,
    },
    {
        Icon: SiJavascript, // Reuse
        top: "50%",
        left: "90%",
        size: 20,
        duration: 13,
        delay: 1,
        rotate: 180,
        yOffset: 50,
    },
    {
        Icon: SiTailwindcss, // Reuse
        top: "20%",
        left: "80%",
        size: 22,
        duration: 14,
        delay: 2,
        rotate: -180,
        yOffset: -50,
    },
    {
        Icon: SiPostgresql, // Reuse
        bottom: "25%",
        right: "85%",
        size: 24,
        duration: 15,
        delay: 4,
        rotate: 90,
        yOffset: 60,
    },
    {
        Icon: SiGit, // Reuse
        top: "40%",
        left: "60%",
        size: 18,
        duration: 16,
        delay: 5,
        rotate: -90,
        yOffset: -60,
    },
];
