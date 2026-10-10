"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ArrowUp} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "~/home", href: "#home" },
  { name: "~/projects", href: "#projects" },
  { name: "~/skills", href: "#skills" },
  { name: "~/certs", href: "#certificates" },
  { name: "~/about", href: "#about" },
  { name: "~/contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-black border-t border-yellow-500/20 font-mono overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-yellow-500 rounded group-hover:bg-yellow-400 transition-colors">
                <Terminal className="w-4 h-4 text-black" />
              </div>
              <span className="text-base font-bold text-white">
                ariel<span className="text-yellow-500">@dev</span>:~$
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Full-Stack Developer and BSIT Magna Cum Laude from the University
              of Mindanao. Building the web, one commit at a time.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/arieljuly"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded border border-yellow-500/20 hover:border-yellow-500 hover:text-yellow-500 transition-all text-gray-500"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ariel-july-traje-a6187b2a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded border border-yellow-500/20 hover:border-yellow-500 hover:text-yellow-500 transition-all text-gray-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold text-yellow-500">
              <span className="text-gray-600">$</span> ls ./navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-yellow-500">▸</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold text-yellow-500">
              <span className="text-gray-600">$</span> status --current
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>
                  available_for_work:{" "}
                  <span className="text-green-400">true</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span>
                  timezone: <span className="text-yellow-500">PHT (UTC+8)</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>
                  response_time: <span className="text-blue-400">&lt; 24h</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <span className="text-yellow-500">©</span> 2026 ariel@dev
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-600">
              <span className="text-yellow-500">$</span> exit 0
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-[#111] border border-yellow-500/20 hover:border-yellow-500 hover:text-yellow-500 transition-all text-gray-500 rounded"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
    </footer>
  );
}
