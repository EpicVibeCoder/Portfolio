"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

const projects = [
  {
    title: "Blockchain Voting System",
    tech: "React, Node.js, Solidity, MongoDB",
    description:
      "Architected a hybrid DApp using Node.js middleware to bridge React with Ethereum. Engineered a scalable Solidity smart contract for concurrent elections and gas-optimized storage.",
    links: {
      demo: "https://www.loom.com/share/acd4eab6c2bd4e8d9b7279d60915be1e?sid=4b516299-9895-47a5-95e4-5dfb935d6a4f",
      github: "https://github.com/EpicVibeCoder/FYDP",
    },
  },
  {
    title: "Restaurant Landing Page",
    tech: "Next.js, Tailwind CSS",
    description:
      "Built a high-performance, SEO-friendly landing page achieving >90% Lighthouse scores. Optimized images, fonts, and layout for fast load times and implemented custom scroll animations.",
    links: {
      demo: "https://interview-sample.vercel.app/",
      github: "https://github.com/EpicVibeCoder/interview_sample",
    },
  },
  {
    title: "Classroom Booking System",
    tech: "PHP, MySQL, AJAX",
    description:
      "Designed a full-stack web application with role-based access, OWASP Top 10 protections (SQLi, CSRF, XSS mitigation), and IP-based rate limiting with 2FA.",
    links: {
      demo: "https://classroombookingapp.infinityfreeapp.com/classRoomBookings.php",
      github: "https://github.com/EpicVibeCoder/ClassroomProject",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-cocoa-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gold-500 mb-16 text-center">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cocoa-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-gold-500/30 transition-colors group flex flex-col"
            >
              <h3 className="text-2xl font-bold text-cream-50 mb-2 group-hover:text-gold-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gold-500/80 font-mono text-xs uppercase tracking-wider mb-4">
                {project.tech}
              </p>
              <p className="text-cream-200/80 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex gap-4 mt-auto">
                {project.links.github !== "#" && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream-100 hover:text-gold-500 text-sm font-bold border-b border-transparent hover:border-gold-500 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo !== "#" && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream-100 hover:text-gold-500 text-sm font-bold border-b border-transparent hover:border-gold-500 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
