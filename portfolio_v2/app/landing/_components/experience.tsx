"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Terminal } from "lucide-react";

const experiences = [
  {
    role: "Junior Full Stack Engineer",
    company: "Obfuscate Solutions Inc.",
    period: "August 2026 – Present",
    type: "Current Position",
    description: [
      "Developed and maintained a SaaS application using Next.js for frontend development and Python-based backend services with Flask and FastAPI.",
      "Designed and implemented RESTful APIs and backend services to support application functionality, business logic, and frontend-backend communication.",
      "Implemented OAuth-based authentication and authorization workflows to support secure user authentication and application access.",
      "Integrated TanStack Query for server-state management, API data fetching, caching, synchronization, and asynchronous data handling in the frontend.",
      "Designed and managed relational database structures using PostgreSQL, implementing data models, relationships, and queries to support application requirements.",
      "Deployed and managed application services using AWS Elastic Container Service (ECS), supporting containerized application deployment and cloud-based execution.",
      "Integrated Amazon S3 for file storage and management, enabling applications to handle uploaded files and other storage requirements.",
      "Worked across frontend and backend components to implement features, troubleshoot integration issues, and maintain application functionality.",
      "Collaborated with the development team through version control using Gitlab, code management, debugging, and continuous improvement of the SaaS platform.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "MediaOne Software Solutions",
    period: "Mar 2026 – Jun 2026",
    type: "Internship",
    description: [
      "Developed a mobile VoIP messaging application using React Native and Laravel, implementing real-time messaging and voice communication features between application users.",
      "Integrated Pusher for event broadcasting and real-time communication, and WebRTC for peer-to-peer audio communication.",
      "Contributed to the development of a truck dispatch management system using Laravel, Livewire, and MySQL, supporting dispatch operations and transportation workflows.",
      "Worked with backend services, database relationships, API integrations, and frontend components to deliver functional application features.",
      "Participated in debugging, testing, and improving application functionality throughout the development process.",
    ],
  },
  {
    role: "Freelance Full-Stack Web Developer",
    company: "Self-Employed",
    period: "Aug 2023 – Mar 2026",
    type: "Freelance",
    description: [
      "Independently designed, developed, and delivered full-stack web applications for 5+ clients using Laravel, PHP, MySQL, React, and Next.js, translating business requirements into functional software solutions.",
      "Collaborated directly with clients to analyze business workflows, gather technical requirements, and develop customized applications that streamlined operational processes.",
      "Designed relational databases, developed REST APIs, and implemented authentication, authorization, and role-based access control (RBAC).",
      "Managed application deployment, environment configuration, and hosting across Hostinger, Vercel, and cloud platforms, with exposure to AWS and Docker-based workflows. Worked with GitHub for version control, CI/CD pipelines, and automated deployment processes.",
      "Implemented business process and workflow automation using GoHighLevel, Zapier, and Make, integrating applications and automating repetitive operational tasks through triggers, actions, webhooks, and API integrations.",
      "Managed the software development lifecycle independently, covering requirements analysis, development, testing, deployment, documentation, and post-launch technical support.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative" id="experience">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12 font-mono">
            <p className="text-yellow-500 text-sm mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="text-gray-600">$</span> cat experience.log
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-gray-600">{"//"}</span> Work{" "}
              <span className="text-yellow-500">Experience</span>
            </h2>
          </div>

          {/* Scrollable Container with Fade */}
          <div className="relative">
            <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {/* Timeline */}
              <div className="relative border-l border-yellow-500/20 ml-3 md:ml-6 space-y-12 pb-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12 font-mono"
                  >
                    {/* Timeline Dot */}
                    <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A0A0A] border-2 border-yellow-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    </span>

                    {/* Card Content */}
                    <div className="bg-[#111111] border border-yellow-500/20 rounded-lg p-6 md:p-8 hover:border-yellow-500/40 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h3 className="text-xl font-bold text-white">
                              {exp.role}
                            </h3>
                            {exp.type === "Current Position" && (
                              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold text-green-400 bg-green-400/10 border border-green-400/20 rounded">
                                Present
                              </span>
                            )}
                          </div>
                          <p className="text-yellow-500 text-sm flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm whitespace-nowrap bg-[#1A1A1A] px-3 py-1.5 rounded-md border border-gray-800 w-fit">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-3 mt-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Fade — hints there's more content to scroll */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10" />
          </div>

          {/* Terminal Footer Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-mono text-gray-500 pl-8 md:pl-12 mt-4"
          >
            <span className="text-yellow-500">$</span> echo &quot;End of experience log&quot;
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}