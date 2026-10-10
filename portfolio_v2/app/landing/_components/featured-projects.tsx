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
    title: "Resort & Booking Management System",
    description:
      "A full-stack resort management platform designed to centralize reservations, accommodation inventory, guest services, payment workflows, and daily resort operations.",
    tech: ["Laravel", "MySQL", "Next.js", "Tailwind CSS"],
    highlights: [
      "Reservation Lifecycle & Double-Booking Prevention",
      "Role-Based Access Control & Audit Logs",
      "Dynamic Pricing, Packages & Payment Management",
      "Real-Time Accommodation Availability",
      "Operational Analytics & Revenue Reporting",
    ],
    github: "https://github.com/arieljuly/Project/tree/main/custom/RBMS",
    live: "https://demo-rbms.arjul.site/home",
  },
  {
    id: "02",
    title: "Review Center Management System",
    description:
      "A web-based platform for managing review center operations, student enrollment, learning resources, exam assessments, and retake approval workflows.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    highlights: [
      "Student Enrollment & Academic Records",
      "Exam Management & Assessment Workflows",
      "Admin-Approved Retake Requests",
      "Scalable File & Learning Resource Management",
      "Role-Based Access Control",
    ],
    github: "https://github.com/arieljuly/Project/tree/main/custom/apex",
    live: "https://cepadayonreviewcenter.com/",
  },
  {
    id: "03",
    title: "Scalable Monorepo CI/CD Architecture",
    description:
      "Designed dual CI/CD workflows for a multi-service monorepo, combining change-based core service validation with parallel execution of independent custom project pipelines to improve scalability and reduce pipeline waiting time.",
    tech: ["GitHub Actions", "YAML", "Docker", "Python", "Laravel"],
    highlights: [
      "Change-Based Core Service Detection",
      "Parallel Custom Project Pipelines",
      "Multi-Stack CI/CD Orchestration",
      "Optimized Pipeline Execution",
      "Automated Code Validation",
    ],
    github: "https://github.com/arieljuly/Project",
    live: "#",
  },
  {
    id: "04",
    title: "POS & Inventory Management System",
    description:
      "Full-stack business management system for processing sales, managing product inventory, tracking stock movements, and generating sales and inventory reports.",
    tech: ["React", "Laravel", "MySQL", "Chart.js"],
    highlights: [
      "Reliable Sales Transaction Processing",
      "Real-Time Inventory Updates",
      "Stock Movement & Adjustment Tracking",
      "Low-Stock Monitoring",
      "Sales Analytics & Business Reporting",
    ],
    github: "https://github.com/arieljuly/doubleK_Inventory",
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
          {projects.map((project, index) => {
            const hasLive = !!project.live && project.live !== "#";
            const hasGithub = !!project.github && project.github !== "#";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-[#111111] border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 rounded-lg overflow-hidden group h-full flex flex-col">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl font-bold font-mono text-yellow-500/30 group-hover:text-yellow-500/60 transition-colors">
                        {project.id}
                      </span>
                      <a
                        href={hasLive ? project.live : undefined}
                        target={hasLive ? "_blank" : undefined}
                        rel={hasLive ? "noopener noreferrer" : undefined}
                        className={`transition-colors ${
                          hasLive
                            ? "text-gray-500 hover:text-yellow-500"
                            : "text-gray-700 pointer-events-none"
                        }`}
                        aria-label={`View ${project.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-mono group-hover:text-yellow-500 transition-colors mb-2">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-4 flex-1">
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
                    {/* LIVE DEMO BUTTON */}
                    <Button
                      asChild={hasLive}
                      disabled={!hasLive}
                      variant="default"
                      className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-mono rounded-none text-xs disabled:bg-yellow-500/20 disabled:text-yellow-500/40 disabled:opacity-100 disabled:cursor-not-allowed"
                    >
                      {hasLive ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" /> live_demo
                        </a>
                      ) : (
                        <>
                          <ExternalLink className="w-3 h-3 mr-2" /> live_demo
                        </>
                      )}
                    </Button>

                    {/* SOURCE (GITHUB) BUTTON */}
                    <Button
                      asChild={hasGithub}
                      disabled={!hasGithub}
                      variant="outline"
                      className="flex-1 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-mono rounded-none text-xs bg-transparent disabled:border-yellow-500/10 disabled:text-yellow-500/30 disabled:opacity-100 disabled:cursor-not-allowed"
                    >
                      {hasGithub ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-3 h-3 mr-2" /> source
                        </a>
                      ) : (
                        <>
                          <FaGithub className="w-3 h-3 mr-2" /> source
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}