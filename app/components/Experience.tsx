"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-cocoa-950 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-gold-500 mb-16 text-center">
          My Journey
        </h2>

        <div className="space-y-12 border-l-2 border-gold-500/20 ml-4 md:ml-0 md:pl-0">
          {/* Experience Items */}
          {EXPERIENCES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 group"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-cocoa-950 group-hover:bg-gold-300 transition-colors md:left-auto md:right-[-6px] md:col-start-2 md:row-start-1 md:hidden" />

              {/* Date */}
              <div className="md:col-span-1 md:text-right text-gold-400 font-mono text-sm uppercase tracking-wider mb-2 md:mb-0 md:pr-8 md:border-r-2 md:border-gold-500/20 md:relative">
                <div className="hidden md:block absolute right-[-5px] top-2 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-cocoa-950 group-hover:bg-gold-300 transition-colors" />
                {item.year}
              </div>

              {/* Content */}
              <div className="md:col-span-4 bg-cocoa-900/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors">
                <h3 className="text-xl font-bold text-cream-50">
                  {item.title}
                </h3>
                <h4 className="text-gold-500/80 mb-4">{item.company}</h4>
                <p className="text-cream-200/70 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXPERIENCES = [
  {
    year: "2019",
    title: "Full Stack & Mobile Developer",
    company: "GPS Bangla",
    description:
      "Developed mobile apps using NativeScript and JavaScript, assisted in backend ASP.NET MVC development, and built the company portfolio in React. Collaborated with offshore teams for feature delivery.",
  },
  {
    year: "2017 - 2018",
    title: "Full Stack Developer",
    company: "VisionBlue Inc.",
    description:
      "Developed native Android applications, integrated REST APIs, and implemented authentication. Optimized layouts for various devices and collaborated on backend API design.",
  },
  {
    year: "2017",
    title: "Android Developer",
    company: "Parallaxlogic Infotech",
    description:
      "Rebuilt a full Android application from scratch, implementing multiple screens, form logic, and local storage solutions.",
  },
];
