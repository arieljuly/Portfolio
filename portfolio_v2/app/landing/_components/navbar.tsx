"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "~/home", href: "#home" },
  { name: "~/projects", href: "#projects" },
  { name: "~/skills", href: "#skills" },
  { name: "~/certs", href: "#certificates" },
  { name: "~/about", href: "#about" },
  { name: "~/contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#home"
            className="flex items-center gap-2 group font-mono"
          >
            <div className="p-1.5 bg-yellow-500 rounded group-hover:bg-yellow-400 transition-colors">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="text-base md:text-lg font-bold text-white">
              ariel<span className="text-yellow-500">@dev</span>:~$
            </span>
            <span className="w-2 h-4 bg-yellow-500 animate-pulse" />
          </Link>

          <div className="hidden md:flex items-center gap-6 font-mono text-sm">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-mono font-semibold rounded-none px-6">
                ./hire-me
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-yellow-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#0A0A0A] border-t border-yellow-500/20"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4 font-mono">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-yellow-500 transition-colors py-2 border-b border-gray-800"
              >
                <span className="text-yellow-500">$</span> {link.name}
              </Link>
            ))}
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-mono font-semibold rounded-none w-full mt-2">
              ./hire-me
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
