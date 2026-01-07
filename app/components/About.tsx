"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Primary Stack",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "PHP",
    ],
  },
  {
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "Python",
      "Solidity",
      "C++",
      "C#",
    ],
  },
  {
    title: "Mobile Development",
    skills: ["Android (Native Java)", "React Native", "NativeScript", "Ionic"],
  },
  {
    title: "Blockchain",
    skills: ["Solidity", "Hardhat", "Truffle", "Web3.js"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Docker", "AWS", "Azure", "Firebase", "Heroku"],
  },
  {
    title: "Other Frameworks",
    skills: ["Angular", "Django", "Laravel", "ASP.NET Core", "Tailwind CSS"],
  },
  {
    title: "Testing & Tools",
    skills: ["Git", "JMeter", "Jest", "JUnit", "Postman"],
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  },
  {
    title: "Security & Others",
    skills: [
      "Aircrack-ng",
      "BeEF",
      "Fern Wifi Cracker",
      "Reaver",
      "Metasploit (Basics)",
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
                    key={skill}
                    className="px-3 py-1 bg-cocoa-800/50 text-cream-200 text-xs font-mono rounded-full border border-white/5 hover:border-gold-500/40 hover:text-gold-300 transition-all cursor-default"
                  >
                    {skill}
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
