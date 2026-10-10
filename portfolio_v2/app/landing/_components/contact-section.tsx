"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative" id="contact">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 font-mono"
          >
            <div>
              <p className="text-yellow-500 text-sm mb-3">
                <span className="text-gray-600">$</span> ping ariel
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                <span className="text-gray-600">{"//"}</span> Let&apos;s{" "}
                <span className="text-yellow-500">Connect</span>
              </h2>
              <p className="text-gray-400 text-base">
                Open to full-time roles, freelance projects, and collaborations.
                Drop a message and I&apos;ll get back within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 bg-[#111111] rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <div className="p-2.5 bg-yellow-500/10 rounded border border-yellow-500/30">
                  <Mail className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">email</p>
                  <a
                    href="mailto:arieljulytraje@gmail.com"
                    className="text-sm font-semibold text-white hover:text-yellow-500 transition-colors break-all"
                  >
                    arieljulytraje@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 bg-[#111111] rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <div className="p-2.5 bg-yellow-500/10 rounded border border-yellow-500/30">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">location</p>
                  <p className="text-sm font-semibold text-white">
                    Davao City, Philippines
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/arieljuly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#111] rounded border border-yellow-500/20 hover:border-yellow-500 hover:text-yellow-500 transition-all text-gray-400"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ariel-july-traje-a6187b2a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#111] rounded border border-yellow-500/20 hover:border-yellow-500 hover:text-yellow-500 transition-all text-gray-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
