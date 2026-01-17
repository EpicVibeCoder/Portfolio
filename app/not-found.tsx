'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './components/ui/Button';

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cocoa-950 px-4 text-center">
            {/* Background Elements */}
            <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-cocoa-500/10 blur-3xl" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
                <h1 className="mb-4 font-display text-9xl text-gold-500 opacity-80">404</h1>
                <h2 className="mb-6 font-serif text-4xl text-cream-50 md:text-5xl">Page Not Found</h2>
                <p className="text-cream-200/60 mx-auto mb-10 max-w-md text-lg">
                    The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                <Link href="/">
                    <Button variant="primary">Return Home</Button>
                </Link>

                <div className="mt-16 font-display text-xl text-gold-500/40">EpicVibeCoder</div>
            </motion.div>
        </div>
    );
}
