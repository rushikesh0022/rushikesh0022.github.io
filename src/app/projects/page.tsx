"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiLogoGithub } from "react-icons/bi";
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiC, SiHtml5, SiShell } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "P2P File Transfer",
        description: "A secure peer-to-peer file sharing system built with Python that uses end-to-end encryption to ensure safe file transfers between peers.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "Encryption", icon: SiPython },
        ],
        githubUrl: "https://github.com/rushikesh0022/p2p_filetransfer",
        featured: true,
    },
    {
        id: 2,
        title: "Practice QP Generator",
        description: "A powerful system that supports multiple AI providers and models (Gemini, OpenAI, DeepSeek) to generate LaTeX-formatted practice papers from uploaded question papers.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "AI/ML", icon: SiPython },
        ],
        githubUrl: "https://github.com/rushikesh0022/practice_qp_generator",
        featured: true,
    },
    {
        id: 3,
        title: "Minimalist OS",
        description: "A custom memory allocator implementation for ARM64 bare-metal systems, featuring a minimal operating system kernel with UART communication and interactive shell.",
        technologies: [
            { name: "C", icon: SiC },
            { name: "ARM64", icon: SiC },
        ],
        githubUrl: "https://github.com/rushikesh0022/minimalist_os",
        featured: true,
    },
    {
        id: 4,
        title: "Telemedicine Connect",
        description: "Modern telemedicine platform with real-time video consultations, secure messaging, and file sharing. Features end-to-end encrypted video calls & chat with screen sharing.",
        technologies: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "JavaScript", icon: SiNodedotjs },
        ],
        githubUrl: "https://github.com/rushikesh0022/telemedicine-connect",
    },
    {
        id: 5,
        title: "Digit Recognizer ANN",
        description: "A neural network for digit recognition built from scratch with NumPy. Features a two-layer network trained on MNIST and an interactive drawing interface.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "NumPy", icon: SiPython },
        ],
        githubUrl: "https://github.com/rushikesh0022/digit-recognizer-ann",
    },
    {
        id: 6,
        title: "Connecting Flights Finder",
        description: "A Python tool that finds the cheapest flight routes between airports using graph theory. Compares direct and connecting flights, balancing cost with convenience.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "Algorithms", icon: SiPython },
        ],
        githubUrl: "https://github.com/rushikesh0022/connecting_flights_finder",
    },
    {
        id: 7,
        title: "Encrypted WhatsApp",
        description: "This project adds password protection to WhatsApp on macOS, requiring a password before the app can be opened for enhanced security.",
        technologies: [
            { name: "Shell", icon: SiShell },
            { name: "macOS", icon: SiShell },
        ],
        githubUrl: "https://github.com/rushikesh0022/encrypted-whatsapp",
    },
    {
        id: 8,
        title: "Spotify Clone",
        description: "A modern music streaming application built with TypeScript, featuring a clean interface and smooth user experience.",
        technologies: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
        ],
        githubUrl: "https://github.com/rushikesh0022/spotify",
    },
    {
        id: 9,
        title: "Handwritten Sentence Recognition",
        description: "An end-to-end deep learning system that converts handwritten sentences from images to digital text using CNN, Bidirectional LSTM, and CTC loss for sequence alignment.",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "TensorFlow", icon: SiPython },
        ],
        githubUrl: "https://github.com/rushikesh0022/handwritten-sentence-recognition",
        featured: true,
    },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const gradients = [
    'from-blue-500/20 to-purple-500/20',
    'from-green-500/20 to-teal-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-teal-500/20 to-blue-500/20',
    'from-red-500/20 to-orange-500/20',
    'from-pink-500/20 to-purple-500/20',
    'from-indigo-500/20 to-blue-500/20',
    'from-yellow-500/20 to-orange-500/20',
  ];

  const borderGradients = [
    'from-blue-500 to-purple-500',
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-purple-500 to-pink-500',
    'from-teal-500 to-blue-500',
    'from-red-500 to-orange-500',
    'from-pink-500 to-purple-500',
    'from-indigo-500 to-blue-500',
    'from-yellow-500 to-orange-500',
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className={`relative bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/20`}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-2xl opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-12 -translate-x-12" />
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute -top-3 -right-3">
            <div className={`bg-gradient-to-r ${borderGradients[index % borderGradients.length]} p-0.5 rounded-full`}>
              <div className="bg-gray-900 rounded-full px-3 py-1">
                <span className="text-xs font-semibold text-white">Featured</span>
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 space-y-6">
          {/* Project Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${borderGradients[index % borderGradients.length]} p-0.5`}>
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  {React.createElement(project.technologies[0].icon, { className: "w-6 h-6 text-white" })}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                  {project.title}
                </h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${borderGradients[index % borderGradients.length]} rounded-full mt-2`} />
              </div>
            </motion.div>

            <motion.p 
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Technologies */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
          >
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2 bg-gradient-to-r ${borderGradients[index % borderGradients.length]} p-0.5 rounded-lg`}
              >
                <div className="bg-gray-900 px-3 py-1.5 rounded-md flex items-center gap-2">
                  <tech.icon className="w-3.5 h-3.5 text-gray-300" />
                  <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 bg-gradient-to-r ${borderGradients[index % borderGradients.length]} p-0.5 rounded-xl group/btn hover:shadow-lg transition-all duration-300`}
            >
              <div className="bg-gray-900 px-6 py-3 rounded-xl flex items-center gap-3 group-hover/btn:bg-gray-800 transition-colors">
                <BiLogoGithub className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                <span className="text-white font-medium">View Repository</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Featured <span className="inline-block bg-gray-200 text-black py-1 px-3 rounded shadow-lg">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning full-stack development, AI integration, 
            and modern web technologies. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12 space-y-6"
        >
          <h3 className="text-3xl font-bold text-white">Ready to collaborate?</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I&apos;m always excited to work on innovative projects and explore new technologies. 
            Let&apos;s create something amazing together.
          </p>
          <Link
            href="/coffee"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Let&apos;s Connect
          </Link>
        </motion.div>
      </div>
    </div>
  );
}