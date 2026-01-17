'use client';

import { motion } from 'framer-motion';
import { SiUnitednations } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
    return (
        <section id="education" className="bg-cocoa-950 px-6 py-20">
            <div className="mx-auto max-w-4xl">
                <h2 className="section-title-center mb-12">Education</h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-8 rounded-2xl border border-gold-500/10 bg-cocoa-900/40 p-8 backdrop-blur-sm md:flex-row md:items-start"
                >
                    <div className="shrink-0 rounded-full bg-gold-500/10 p-4 text-gold-500">
                        <FaGraduationCap size={40} />
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="mb-2 text-2xl font-bold text-cream-50">BSc Computer Science & Engineering</h3>
                        <p className="mb-4 text-lg text-gold-400">United International University</p>
                        <div className="inline-block rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1 font-mono text-sm text-gold-300">
                            2020 - 2024
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
