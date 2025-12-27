"use client";

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
  SiPostgresql,
  SiAndroid,
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
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="border border-gold-500/10 rounded-lg px-4 py-3 bg-cocoa-900/40 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-gold-500/50 hover:bg-cocoa-800/60 transition-all group"
              >
                <skill.icon 
                  className="text-xl transition-colors" 
                  style={{ color: skill.color }}
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Solidity", icon: SiSolidity, color: "#363636" },
  { name: "Web3.js", icon: SiEthereum, color: "#627EEA" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Android", icon: SiAndroid, color: "#3DDC84" },
];
