"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Mini E-Commerce API",
        tech: "NestJS, Prisma, MySQL, Redis",
        description: "Designed a scalable backend REST API with modular architecture. Implemented secure auth, role-based access, Stripe payments, Redis caching, and graph traversal for product recommendations. Containerized with Docker.",
        image: "https://placehold.co/600x400?text=E-Commerce+API", // No screenshot provided yet
        links: {
            demo: "#",
            github: "https://github.com/EpicVibeCoder/mini-ecommerce-api",
        },
    },
    {
        title: "fileManager API",
        tech: "Node.js, MongoDB, Docker",
        description: "Robust Node.js API for secure file storage with folder management, file operations, Favorites, Dashboard, a secure Vault (PIN-protected), and Calendar integration. Includes Google OAuth and OTP-based password reset.",
        image: "https://placehold.co/600x400?text=Storage+API",
        links: {
            demo: "#",
            github: "https://github.com/EpicVibeCoder/fileManager",
        },
    },
    {
        title: "Classroom Booking System",
        tech: "PHP, MySQL, AJAX",
        description: "Designed a full-stack web application with session security. Implemented OWASP Top 10 protections (SQLi, CSRF, XSS), IP-based rate limiting, and Two-Factor Authentication (2FA).",
        image: "/projects/classroom-booking.png",
        links: {
            demo: "https://classroombookingapp.infinityfreeapp.com/classRoomBookings.php",
            github: "https://github.com/EpicVibeCoder/ClassroomProject",
        },
    },
    {
        title: "Restaurant Landing Page",
        tech: "Next.js, Tailwind CSS",
        description: "Built a responsive, SEO-friendly landing page achieving Lighthouse scores above 90%. Optimized performance and created custom scroll animations.",
        image: "/projects/restaurant-landing.png",
        links: {
            demo: "https://interview-sample.vercel.app/",
            github: "https://github.com/EpicVibeCoder/interview_sample",
        },
    },
    {
        title: "Blockchain Voting System",
        tech: "React, Node.js, Solidity, MongoDB",
        description: "Architected a hybrid DApp using Node.js middleware to bridge React with Ethereum. Engineered a scalable Solidity smart contract for concurrent elections and gas-optimized storage.",
        image: "/projects/blockchain-voting.png",
        links: {
            demo: "https://www.loom.com/share/acd4eab6c2bd4e8d9b7279d60915be1e",
            github: "https://github.com/EpicVibeCoder/FYDP",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-cocoa-950 px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="section-title-center">Selected Projects</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-cocoa-900/40 backdrop-blur-sm transition-colors hover:border-gold-500/30"
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative h-48 w-full overflow-hidden bg-cocoa-800/50">
                                <Image src={project.image} alt={project.title} fill unoptimized={project.image.startsWith("https://placehold.co")} className="transform object-cover opacity-80 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 to-transparent opacity-60" />
                            </div>

                            <div className="flex flex-grow flex-col p-6">
                                <h3 className="mb-2 text-2xl font-bold text-cream-50 transition-colors group-hover:text-gold-400">{project.title}</h3>
                                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-gold-500/80">{project.tech}</p>
                                <p className="text-cream-200/80 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>

                                <div className="mt-auto flex gap-4">
                                    {project.links.github !== "#" && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer" className="border-b border-transparent text-sm font-bold text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-500">
                                            GitHub
                                        </a>
                                    )}
                                    {project.links.demo !== "#" && (
                                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="border-b border-transparent text-sm font-bold text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-500">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
