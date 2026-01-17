'use client';

import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden bg-cocoa-950 px-6 py-20">
            {/* Decorative background element */}
            <div
                className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold-600/5 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-5xl">
                <h2 className="section-title-center">My Journey</h2>

                <div className="ml-4 space-y-12 border-l-2 border-gold-500/20 md:ml-0 md:pl-0">
                    {/* Experience Items */}
                    {EXPERIENCES.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative pl-8 md:grid md:grid-cols-5 md:gap-8 md:pl-0"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-gold-500 ring-4 ring-cocoa-950 transition-colors group-hover:bg-gold-300 md:left-auto md:right-[-6px] md:col-start-2 md:row-start-1 md:hidden" />

                            {/* Date */}
                            <div className="mb-2 font-mono text-sm uppercase tracking-wider text-gold-400 md:relative md:col-span-1 md:mb-0 md:border-r-2 md:border-gold-500/20 md:pr-8 md:text-right">
                                <div className="absolute right-[-5px] top-2 hidden h-3 w-3 rounded-full bg-gold-500 ring-4 ring-cocoa-950 transition-colors group-hover:bg-gold-300 md:block" />
                                {item.year}
                            </div>

                            {/* Content */}
                            <div className="rounded-xl border border-white/5 bg-cocoa-900/50 p-6 transition-colors hover:border-gold-500/30 md:col-span-4">
                                <h3 className="text-xl font-bold text-cream-50">{item.title}</h3>
                                <h4 className="mb-4 text-gold-500/80">{item.company}</h4>
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
        year: 'Mar 2019 - Oct 2019',
        title: 'Full Stack & Mobile Developer',
        company: 'GPS Bangla',
        description:
            'Worked on mobile app development using NativeScript and JavaScript. Assisted backend development with ASP.NET MVC. Built the company portfolio website in React. Collaborated with offshore teams on mobile UI and feature delivery.',
    },
    {
        year: 'Oct 2017 - Jan 2018',
        title: 'Full Stack Developer',
        company: 'VisionBlue Inc.',
        description:
            'Developed native Android applications using Java and Android Studio. Built UI screens, integrated REST APIs, and implemented new feature modules. Reskinned apps, added authentication, and optimized layouts. Worked closely with clients and backend developers.',
    },
    {
        year: 'Jun 2017 - Aug 2017',
        title: 'Android Developer',
        company: 'Parallaxlogic Infotech',
        description:
            'Rebuilt a full Android application from scratch as a capability evaluation. Implemented multiple screens, form logic, and local storage.',
    },
];
