"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Database, Wrench, Zap, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      "Laravel",
      "PHP",
      "Python",
      "Flask",
      "FastAPI",
      "Java",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "Query Optimization",
      "Data Modeling",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "CI/CD Pipelines",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "Automation",
    icon: <Zap className="w-5 h-5" />,
    skills: [
      "Zapier",
      "Make",
      "GoHighLevel",
      "Notion",
      "ClickUp",
      "Lucidchart",
      "Draw.io",
    ],
  },
  {
    title: "Design & Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      "Figma",
      "React Native",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
    ],
  },
];

export default function TechSkills() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative" id="skills">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 font-mono"
        >
          <p className="text-yellow-500 text-sm mb-2">
            <span className="text-gray-600">$</span> cat stack.txt
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gray-600">{"//"}</span> Tech{" "}
            <span className="text-yellow-500">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use daily to ship production-ready
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-[#111111] border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 rounded-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/30 text-yellow-500">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-black text-gray-300 text-xs rounded border border-gray-800 hover:border-yellow-500/40 hover:text-yellow-500 transition-colors font-mono"
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
  );
}
