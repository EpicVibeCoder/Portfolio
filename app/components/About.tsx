"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiSolidity,
  SiEthereum,
  SiAmazon,
  SiDocker,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiExpo,
} from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-cocoa-900">
      <div className="max-w-4xl mx-auto">
        <div className="opacity-100 transform-none">
          <h2 className="text-4xl md:text-5xl font-serif text-gold-500 mb-8 border-b border-gold-500/20 pb-4 inline-block">
            About Me
          </h2>
          <p className="text-lg text-cream-100/90 leading-relaxed space-y-4 mb-8">
            Full-stack developer with practical experience in web, mobile, and
            blockchain development. I have a strong track record of building
            secure, scalable applications through professional roles and
            independent projects. My work bridges the gap between complex
            backend architectures and intuitive frontend experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-gold-400/80">
            {[
              { name: "React", icon: SiReact },
              { name: "Next.js", icon: SiNextdotjs },
              { name: "Node.js", icon: SiNodedotjs },
              { name: "NestJS", icon: SiNestjs },
              { name: "Solidity", icon: SiSolidity },
              { name: "Web3.js", icon: SiEthereum },
              { name: "React Native", icon: SiReact }, // Using React logo for Native as well default
              { name: "AWS", icon: SiAmazon },
              { name: "Docker", icon: SiDocker },
              { name: "TypeScript", icon: SiTypescript },
              { name: "MongoDB", icon: SiMongodb },
              { name: "MySQL", icon: SiMysql },
            ].map((skill) => (
              <div
                key={skill.name}
                className="border border-gold-500/10 rounded-lg px-4 py-3 bg-cocoa-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-gold-500/50 hover:bg-cocoa-800/60 transition-all group"
              >
                <skill.icon className="text-xl group-hover:text-gold-400 transition-colors" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
