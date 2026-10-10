"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Download,
  Mail,
  Briefcase,
  GraduationCap,
  Trophy,
} from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative" id="about">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden bg-[#111111] border border-yellow-500/20">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-yellow-500/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs font-mono text-gray-500">
                  ariel@dev: ~/about
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-gray-400">
                <p>
                  <span className="text-yellow-500">$</span> cat about.md
                </p>
                <p className="text-white text-lg font-bold pt-4">
                  # Ariel July Traje
                </p>
                <p className="text-gray-500">
                  Build Smarter. Scale Faster. Deliver with Confidence.
                </p>
                <p className="pt-2 leading-relaxed">
                  BSIT Magna Cum Laude graduate from the University of Mindanao,
                  specializing in full-stack development, scalable systems, and
                  secure API-driven applications. I turn complex business needs
                  into reliable, high-performance digital solutions.
                </p>
                <p className="pt-4">
                  <span className="text-yellow-500">$</span> cat interests.txt
                </p>
                <p className="text-green-400">→ Full-Stack Developer</p>
                <p className="text-green-400">→ Front-End Developer</p>
                <p className="text-green-400">→ AI Automation</p>
                <p className="text-green-400">→ SaaS Application Developer</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-[#111] border border-yellow-500/30 p-4 rounded-lg shadow-xl font-mono"
            >
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-xs text-yellow-500 uppercase">
                  Magna Cum Laude
                </span>
              </div>
              <p className="text-xs text-gray-500">BSIT • UMindanao-Matina</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 font-mono"
          >
            <div>
              <p className="text-yellow-500 text-sm mb-3">
                <span className="text-gray-600">$</span> whoami --verbose
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                <span className="text-gray-600">{"//"}</span> About{" "}
                <span className="text-yellow-500">Me</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I&apos;m{" "}
              <span className="text-white font-semibold">Ariel July Traje</span>
              , a Full-Stack Developer with a strong foundation in building
              scalable web applications. I graduated{" "}
              <span className="text-yellow-500 font-semibold">
                Magna Cum Laude
              </span>{" "}
              with a Bachelor of Science in Information Technology from the
              University of Mindanao. My journey in tech is driven by a passion
              for clean code, secure systems, and continuous learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <GraduationCap className="w-4 h-4 text-yellow-500 mt-0.5" />
                  ),
                  title: "Education",
                  desc: "BSIT • Magna Cum Laude",
                },
                {
                  icon: <Trophy className="w-4 h-4 text-yellow-500 mt-0.5" />,
                  title: "Achievements",
                  desc: "Hackathons & Mentorship",
                },
                {
                  icon: (
                    <Briefcase className="w-4 h-4 text-yellow-500 mt-0.5" />
                  ),
                  title: "Focus",
                  desc: "Full-Stack & Security",
                },
                {
                  icon: (
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5" />
                  ),
                  title: "Interests",
                  desc: "AI Automation, SaaS, Web Apps, Front-End Development, SEO",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Ariel_Traje_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Ariel_Traje_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none px-8 border-yellow-500/40 text-yellow-500 hover:text-yellow-300 hover:border-yellow-400 hover:bg-yellow-500/10 font-mono w-full bg-transparent transition-colors"
                >
                  ./view-cv <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="mailto:arieljulytraje@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Ariel%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0A">
                <Button
                  variant="outline"
                  className="rounded-none px-8 border-yellow-500/30 text-yellow-500 hover:text-yellow-300 hover:border-yellow-400 hover:bg-yellow-500/10 font-mono bg-transparent transition-colors"
                >
                  <Mail className="mr-2 w-4 h-4" /> ./contact
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
