"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Laravel Framework",
  "Flask and FastAPI Frameworks",
  "React Enthusiast",
  "Automation Engineer",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (text.length > 0) {
            setText(currentRole.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 100,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-yellow-500">
      {text}
      <span className="inline-block w-1 h-6 md:h-10 bg-yellow-500 ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px]" />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 left-10 w-3 h-3 bg-yellow-500 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-40 right-20 w-2 h-2 bg-yellow-500 rounded-full"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-sm font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              status: available_for_work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-mono leading-tight"
            >
              <span className="text-gray-500">&gt;</span> Hi, I&apos;m <br />
              <span className="text-yellow-500">Ariel July Traje</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-mono text-gray-300"
            >
              <span className="text-gray-600">$</span> <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono"
            >
              <span className="text-yellow-500">{"/**"}</span> BSIT{" "}
              <span className="text-white">Magna Cum Laude</span> graduate from
              University of Mindanao. Building scalable web apps, robust REST
              APIs, and automation pipelines.{" "}
              <span className="text-yellow-500">*/</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* View Projects — anchor scroll */}
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-mono font-semibold rounded-none px-8 w-full"
                >
                  ./view-projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
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
                  className="rounded-none px-8 border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/10 font-mono w-full bg-transparent"
                >
                  ./view-cv <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <a
                href="https://github.com/arieljuly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-500 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ariel-july-traje-a6187b2a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-500 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <span className="text-gray-700 font-mono">|</span>
              <span className="text-sm text-gray-500 font-mono">
                📍 Philippines
              </span>
            </motion.div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-[#111111] border border-yellow-500/20 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.15)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-yellow-500/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs font-mono text-gray-500">
                  ariel@portfolio: ~
                </span>
              </div>

              <div className="p-6 font-mono text-sm space-y-3 min-h-[360px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-400"
                >
                  <span className="text-yellow-500">$</span> whoami
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-white pl-4"
                >
                  ariel_july_traje
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-gray-400"
                >
                  <span className="text-yellow-500">$</span> cat education.txt
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="text-green-400 pl-4 text-xs whitespace-pre-wrap"
                >
                  {`University of Mindanao\nBS Information Technology\nMagna Cum Laude`}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="text-gray-400"
                >
                  <span className="text-yellow-500">$</span> cat skills.json
                </motion.div>
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-green-400 pl-4 text-xs whitespace-pre-wrap"
                >{`{
  "frontend": ["React", "Next.js"],
  "backend":  ["Laravel", "FastAPI"],
  "database": ["PostgreSQL", "MySQL"]
}`}</motion.pre>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="text-gray-400 flex items-center"
                >
                  <span className="text-yellow-500">$</span>
                  <span className="w-2 h-4 bg-yellow-500 ml-2 animate-pulse" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
