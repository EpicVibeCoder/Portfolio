"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("ashiq.upwork.profile@gmail.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <footer className="bg-cocoa-900 border-t border-white/5 pt-16 pb-8 px-6 relative">
      <AnimatePresence>
        {showCopied && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gold-500 text-cocoa-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 z-50 text-sm"
          >
            <FaCheck />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        {/* Brand & Summary */}
        <div>
          <h2 className="font-display text-3xl text-gold-500 mb-6">
            EpicVibeCoder
          </h2>
          <p className="text-cream-200/60 max-w-sm leading-relaxed">
            Building secure, scalable, and user-centric digital solutions using
            modern technologies.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 md:items-end">
          <h3 className="text-xl font-serif text-cream-50 mb-2">Contact</h3>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 text-cream-200/80 hover:text-gold-500 transition-colors group"
            aria-label="Copy email address"
          >
            <FaEnvelope className="group-hover:scale-110 transition-transform" />
            <span>ashiq.upwork.profile@gmail.com</span>
          </button>

          <a
            href="https://wa.me/8801726848226"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-cream-200/80 hover:text-gold-500 transition-colors"
          >
            <FaWhatsapp />
            <span>+880 1726-848226</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bashundhara+R%2FA,+Dhaka"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-cream-200/80 hover:text-gold-500 transition-colors"
          >
            <FaMapMarkerAlt />
            <span>Bashundhara R/A, Dhaka</span>
          </a>

          <a
            href="https://github.com/EpicVibeCoder"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-cream-200/80 hover:text-gold-500 transition-colors"
          >
            <FaGithub />
            <span>EpicVibeCoder</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-cream-200/40 text-sm">
        <p>© {currentYear} EpicVibeCoder. All rights reserved.</p>
        <p>Designed & Built with Next.js</p>
      </div>
    </footer>
  );
}
