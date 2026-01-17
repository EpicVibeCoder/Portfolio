'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [showCopied, setShowCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('ashiq.upwork.profile@gmail.com');
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    return (
        <footer className="relative border-t border-white/5 bg-cocoa-900 px-6 pb-8 pt-16">
            <AnimatePresence>
                {showCopied && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 10, x: '-50%' }}
                        className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-sm font-bold text-cocoa-900 shadow-lg"
                    >
                        <FaCheck />
                        <span>Email copied to clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mx-auto mb-16 grid max-w-6xl gap-12 md:grid-cols-2">
                {/* Brand & Summary */}
                <div>
                    <h2 className="mb-6 font-display text-3xl text-gold-500">EpicVibeCoder</h2>
                    <p className="text-cream-200/60 max-w-sm leading-relaxed">
                        Building secure, scalable, and user-centric digital solutions using modern technologies.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-6 md:items-end">
                    <h3 className="mb-2 font-serif text-xl text-cream-50">Contact</h3>

                    <button
                        onClick={handleCopyEmail}
                        className="text-cream-200/80 group flex items-center gap-3 transition-colors hover:text-gold-500"
                        aria-label="Copy email address"
                    >
                        <FaEnvelope className="transition-transform group-hover:scale-110" />
                        <span>ashiq.upwork.profile@gmail.com</span>
                    </button>

                    <a
                        href="https://wa.me/8801726848226"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream-200/80 flex items-center gap-3 transition-colors hover:text-gold-500"
                    >
                        <FaWhatsapp />
                        <span>+880 1726-848226</span>
                    </a>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Bashundhara+R%2FA,+Dhaka"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream-200/80 flex items-center gap-3 transition-colors hover:text-gold-500"
                    >
                        <FaMapMarkerAlt />
                        <span>Bashundhara R/A, Dhaka</span>
                    </a>

                    <a
                        href="https://github.com/EpicVibeCoder"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream-200/80 flex items-center gap-3 transition-colors hover:text-gold-500"
                    >
                        <FaGithub />
                        <span>EpicVibeCoder</span>
                    </a>
                </div>
            </div>

            <div className="text-cream-200/40 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm md:flex-row">
                <p>© {currentYear} EpicVibeCoder. All rights reserved.</p>
                <p>Designed & Built with Next.js</p>
            </div>
        </footer>
    );
}
