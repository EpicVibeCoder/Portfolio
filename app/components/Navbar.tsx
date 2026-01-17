"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./ui/Button";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const solidBg = mobileMenuOpen || isScrolled;

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(() => {
                raf = 0;
                setIsScrolled(window.scrollY > 10);
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={clsx("fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300", solidBg ? "glass-panel mx-4 mt-4 py-3" : "bg-transparent")}>
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a href="#" className="font-display text-2xl text-gold-500 transition-colors hover:text-gold-400">
                    EpicVibeCoder
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-wider text-cream-100 transition-colors hover:text-gold-400">
                            {link.name}
                        </a>
                    ))}
                    <a href="/EpicVibeCoder_CV.pdf" download="EpicVibeCoder_CV.pdf">
                        <Button variant="primary" className="px-6 py-2 text-sm">
                            Download CV
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="text-2xl text-cream-100 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle mobile menu">
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-cocoa-900/95 py-4 backdrop-blur-xl md:hidden">
                    <ul className="space-y-4 px-4">
                        {navItems.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-cream-100 transition-colors hover:text-gold-500">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="/EpicVibeCoder_CV.pdf" download="EpicVibeCoder_CV.pdf" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" className="w-full">
                                    Download CV
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </motion.nav>
    );
}
