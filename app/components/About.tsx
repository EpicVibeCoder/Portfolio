"use client";

import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiSolidity,
  SiSolidity as TbBrandTruffle,
  SiCplusplus,
  SiAndroid,
  SiNativescript,
  SiIonic,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiHeroku,
  SiAngular,
  SiDjango,
  SiLaravel,
  SiDotnet,
  SiTailwindcss,
  SiGit,
  SiApachejmeter,
  SiJest,
  SiPostman,
  SiFigma,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiKalilinux,
  SiWireshark,
  SiHackthebox as SiHtb,
} from "react-icons/si";
import { FaJava, FaPython, FaShieldAlt, FaCode } from "react-icons/fa";
import { TbBrandCSharp as SiCsharp } from "react-icons/tb";
import { VscAzure as SiMicrosoftazure } from "react-icons/vsc";

const SKILL_CATEGORIES = [
  {
    title: "Primary Stack",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "Python", icon: FaPython, color: "text-blue-300" },
      { name: "Solidity", icon: SiSolidity, color: "text-gray-400" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "C#", icon: SiCsharp, color: "text-purple-500" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Android", icon: SiAndroid, color: "text-green-400" },
      { name: "React Native", icon: SiReact, color: "text-cyan-400" },
      { name: "NativeScript", icon: SiNativescript, color: "text-blue-400" },
      { name: "Ionic", icon: SiIonic, color: "text-blue-500" },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Solidity", icon: SiSolidity, color: "text-gray-400" },
      { name: "Hardhat", icon: FaCode, color: "text-yellow-300" },
      { name: "Truffle", icon: TbBrandTruffle, color: "text-amber-600" },
      { name: "Web3.js", icon: FaCode, color: "text-orange-400" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
      { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Heroku", icon: SiHeroku, color: "text-purple-400" },
    ],
  },
  {
    title: "Other Frameworks",
    skills: [
      { name: "Angular", icon: SiAngular, color: "text-red-600" },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "text-purple-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "JMeter", icon: SiApachejmeter, color: "text-red-500" },
      { name: "Jest", icon: SiJest, color: "text-red-400" },
      { name: "JUnit", icon: FaJava, color: "text-green-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: SiFigma, color: "text-purple-400" },
      { name: "Adobe XD", icon: SiAdobexd, color: "text-pink-500" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-400" },
      {
        name: "Illustrator",
        icon: SiAdobeillustrator,
        color: "text-orange-400",
      },
    ],
  },
  {
    title: "Security & Others",
    skills: [
      { name: "Aircrack-ng", icon: FaShieldAlt, color: "text-red-500" },
      { name: "BeEF", icon: FaShieldAlt, color: "text-red-500" },
      { name: "Fern Wifi", icon: FaShieldAlt, color: "text-green-500" },
      { name: "Reaver", icon: FaShieldAlt, color: "text-gray-300" },
      { name: "Metasploit", icon: SiKalilinux, color: "text-blue-500" },
      { name: "Wireshark", icon: SiWireshark, color: "text-blue-400" },
      { name: "HTB", icon: SiHtb, color: "text-green-500" },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-cocoa-900">
      <div className="max-w-6xl mx-auto">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title-center">About Me</h2>
          <p className="text-xl text-cream-100/90 leading-relaxed">
            I'm <span className="text-gold-500 font-bold">EpicVibeCoder</span> –
            a developer who thrives on building cool, complex, and scalable
            systems. From crafting sleek UIs in Next.js to architecting secure
            blockchain DApps and robust NestJS backends, I write code that works
            as good as it looks. I turn coffee into clean code and complex
            problems into elegant solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cocoa-950/40 p-6 rounded-2xl border border-white/5 hover:border-gold-500/20 transition-colors"
            >
              <h3 className="text-xl font-serif text-gold-400 mb-4 border-b border-white/5 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1 bg-cocoa-800/50 text-cream-200 text-xs font-mono rounded-full border border-white/5 hover:border-gold-500/40 hover:text-gold-300 transition-all cursor-default"
                  >
                    <skill.icon className={`${skill.color} text-sm`} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
