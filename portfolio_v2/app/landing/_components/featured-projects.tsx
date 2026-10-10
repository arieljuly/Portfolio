"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Resort Booking System",
    description:
      "Full-stack solution for room availability, reservations, and admin dashboards with real-time booking status and payment workflows.",
    tech: ["Laravel", "MySQL", "Tailwind", "Stripe"],
    highlights: [
      "Complex business logic",
      "Role-based access control",
      "Automated notifications",
    ],
    github: "#",
    live: "https://project-1y21.vercel.app/",
  },
  {
    id: "02",
    title: "Review Center / LMS",
    description:
      "Scalable Learning Management System for student enrollment, exam management, and file storage with retake approval logic.",
    tech: ["Next.js", "PostgreSQL", "FastAPI", "AWS S3"],
    highlights: [
      "Complex data relationships",
      "File storage optimization",
      "Scalable architecture",
    ],
    github: "#",
    live: "https://cepadayonreviewcenter.com/",
  },
  {
    id: "03",
    title: "CI/CD Pipeline",
    description:
      "Automated code formatting, testing, build checks, and deployment. Reduced deployment time by 80% and eliminated manual errors.",
    tech: ["GitHub Actions", "Docker", "YAML", "AWS EC2"],
    highlights: [
      "DevOps automation",
      "Git workflow optimization",
      "Real-time debugging",
    ],
    github: "#",
    live: "#",
  },
  {
    id: "04",
    title: "POS & Inventory System",
    description:
      "Robust Point of Sale system handling product management, stock updates, sales transactions, and detailed reporting.",
    tech: ["React", "Laravel", "MySQL", "Chart.js"],
    highlights: [
      "Transaction handling",
      "Data consistency",
      "Business intelligence",
    ],
    github: "#",
    live: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative" id="projects">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 font-mono"
        >
          <p className="text-yellow-500 text-sm mb-2">
            <span className="text-gray-600">$</span> ls -la ./projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gray-600">{"//"}</span> Featured{" "}
            <span className="text-yellow-500">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Production-ready applications solving real-world problems. From
            business logic to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-[#111111] border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 rounded-lg overflow-hidden group h-full">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-bold font-mono text-yellow-500/30 group-hover:text-yellow-500/60 transition-colors">
                      {project.id}
                    </span>
                    <a
                      href={project.live}
                      className="text-gray-500 hover:text-yellow-500 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-mono group-hover:text-yellow-500 transition-colors mb-2">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border border-yellow-500/20 rounded font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-gray-800">
                    <p className="text-xs font-mono text-gray-500 mb-2">
                      {"// key_highlights"}
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-400 font-mono flex items-center gap-2"
                        >
                          <span className="text-yellow-500">▸</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    variant="default"
                    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-mono rounded-none text-xs"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" /> live_demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-mono rounded-none text-xs bg-transparent"
                  >
                    <FaGithub className="w-3 h-3 mr-2" /> source
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
