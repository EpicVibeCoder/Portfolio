'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';
import Image from 'next/image';

const projects = [
  {
    title: 'Mini E-Commerce API',
    tech: 'NestJS, Prisma, MySQL, Redis',
    description:
      'Designed a scalable backend REST API with modular architecture. Implemented secure auth, role-based access, Stripe payments, Redis caching, and graph traversal for product recommendations. Containerized with Docker.',
    image: 'https://placehold.co/600x400?text=E-Commerce+API', // No screenshot provided yet
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Classroom Booking System',
    tech: 'PHP, MySQL, AJAX',
    description:
      'Designed a full-stack web application with session security. Implemented OWASP Top 10 protections (SQLi, CSRF, XSS), IP-based rate limiting, and Two-Factor Authentication (2FA).',
    image: '/projects/classroom-booking.png',
    links: {
      demo: 'https://classroombookingapp.infinityfreeapp.com/classRoomBookings.php',
      github: 'https://github.com/EpicVibeCoder/ClassroomProject',
    },
  },
  {
    title: 'Restaurant Landing Page',
    tech: 'Next.js, Tailwind CSS',
    description:
      'Built a responsive, SEO-friendly landing page achieving Lighthouse scores above 90%. Optimized performance and created custom scroll animations.',
    image: '/projects/restaurant-landing.png',
    links: {
      demo: 'https://interview-sample.vercel.app/',
      github: 'https://github.com/EpicVibeCoder/interview_sample',
    },
  },
  {
    title: 'Blockchain Voting System',
    tech: 'React, Node.js, Solidity, MongoDB',
    description:
      'Architected a hybrid DApp using Node.js middleware to bridge React with Ethereum. Engineered a scalable Solidity smart contract for concurrent elections and gas-optimized storage.',
    image: '/projects/blockchain-voting.png',
    links: {
      demo: 'https://www.loom.com/share/acd4eab6c2bd4e8d9b7279d60915be1e',
      github: 'https://github.com/EpicVibeCoder/FYDP',
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-cocoa-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title-center">Selected Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cocoa-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-colors group flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-cocoa-800/50 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-110 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
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
                  {project.links.github !== '#' && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cream-100 hover:text-gold-500 text-sm font-bold border-b border-transparent hover:border-gold-500 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo !== '#' && (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
