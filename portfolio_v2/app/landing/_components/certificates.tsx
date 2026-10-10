"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, Calendar, ShieldCheck, X } from "lucide-react";

const certificates = [
  {
    title: "ASEAN Data Science Explorers",
    issuer: "ASEAN Foundation",
    date: "2024",
    image: "/assets/images/asean.png",
    skills: ["Data Science", "Analytics", "ASEAN"],
  },
  {
    title: "Ethical Hacking / CRACK",
    issuer: "Cybersecurity Training",
    date: "2024",
    image: "/assets/images/crack.png",
    skills: ["Ethical Hacking", "Penetration Testing", "Security"],
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    image: "/assets/images/cybersecurity.png",
    skills: ["Cybersecurity", "Network Security", "Threats"],
  },
  {
    title: "Database Management",
    issuer: "Database Certification",
    date: "2023",
    image: "/assets/images/database.png",
    skills: ["SQL", "Database Design", "MySQL"],
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Design Certification",
    date: "2023",
    image: "/assets/images/design5.png",
    skills: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    title: "Hackathon Participant",
    issuer: "Hackathon Event",
    date: "2024",
    image: "/assets/images/hackathon.png",
    skills: ["Teamwork", "Rapid Prototyping", "Innovation"],
  },
  {
    title: "HTML & Web Fundamentals",
    issuer: "Web Development Certification",
    date: "2022",
    image: "/assets/images/html.png",
    skills: ["HTML5", "CSS3", "Web Basics"],
  },
  {
    title: "Java Programming",
    issuer: "Java Certification",
    date: "2022",
    image: "/assets/images/java.png",
    skills: ["Java", "OOP", "Data Structures"],
  },
  {
    title: "Peer Mentor Program",
    issuer: "University of Mindanao",
    date: "2023",
    image: "/assets/images/mentor.png",
    skills: ["Mentoring", "Leadership", "Communication"],
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    image: "/assets/images/network.png",
    skills: ["Networking", "TCP/IP", "Routing"],
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <>
      <section className="py-24 bg-[#0A0A0A] relative" id="certificates">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 font-mono"
          >
            <p className="text-yellow-500 text-sm mb-2">
              <span className="text-gray-600">$</span> ls ./certificates
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gray-600">{"//"}</span> Verified{" "}
              <span className="text-yellow-500">Credentials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuous learning validated by industry-recognized
              certifications. Click any certificate to view it in full.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer"
              >
                <Card className="bg-[#111111] border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 rounded-lg h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/5 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-125 z-10" />

                  {/* Certificate Preview Image */}
                  <div className="relative w-full h-40 bg-black overflow-hidden border-b border-yellow-500/10">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                  </div>

                  <CardContent className="p-5 space-y-3 relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="p-2 bg-yellow-500 rounded">
                        <Award className="w-4 h-4 text-black" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow-500 transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white font-mono group-hover:text-yellow-500 transition-colors leading-tight mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-black text-gray-400 text-xs rounded border border-gray-800 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-[#111111] border border-yellow-500/30 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-yellow-500/10">
                <div className="flex items-center gap-2 font-mono">
                  <ShieldCheck className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-400">
                    {selectedCert.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-gray-500 hover:text-yellow-500 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative w-full aspect-[4/3] bg-black">
                <Image
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-4 border-t border-yellow-500/10 font-mono">
                <p className="text-sm font-bold text-white mb-1">
                  {selectedCert.title}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedCert.issuer} <span className="text-gray-700">|</span>{" "}
                  {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
