"use client";

import { motion } from "framer-motion";
import { SiUnitednations } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-cocoa-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title-center mb-12">Education</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-cocoa-900/40 backdrop-blur-sm border border-gold-500/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start"
        >
          <div className="p-4 bg-gold-500/10 rounded-full text-gold-500 shrink-0">
            <FaGraduationCap size={40} />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cream-50 mb-2">
              BSc Computer Science & Engineering
            </h3>
            <p className="text-gold-400 text-lg mb-4">
              United International University
            </p>
            <div className="inline-block bg-gold-500/10 px-4 py-1 rounded-full border border-gold-500/20 text-gold-300 font-mono text-sm">
              2020 - 2024
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
