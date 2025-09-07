import { IconType } from "react-icons";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDatabase,
  FaCode
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiExpress,
  SiFirebase,
  SiVercel
} from "react-icons/si";

// Navigation Links
export interface NavLink {
  href: string;
  label: string;
  icon?: IconType;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/coffee", label: "Coffee" },
];

// Social Links
export interface SocialLink {
  href: string;
  label: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/rushikesh0022",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/rushikesh-reddy-153103293/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.codechef.com/users/rushikesh_1984",
    label: "CodeChef",
    icon: FaCode,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: FaEnvelope,
  },
];

// Project URL
export const projectUrl = "https://github.com/rushikesh0022/portfolio";

// Skill Badges
export interface SkillBadge {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}

export const skillBadges: SkillBadge[] = [
  {
    name: "React",
    icon: FaReact,
    color: "text-blue-500",
    description: "Frontend library for building user interfaces",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    description: "Typed superset of JavaScript",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    description: "React framework for production",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    description: "JavaScript runtime environment",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-500",
    description: "High-level programming language",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    description: "Programming language of the web",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    description: "Markup language for web pages",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-400",
    description: "Stylesheet language for web design",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-500",
    description: "Utility-first CSS framework",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
    description: "NoSQL document database",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-orange-400",
    description: "Google's mobile and web application platform",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-500",
    description: "Distributed version control system",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-black",
    description: "Cloud platform for frontend deployment",
  },
];

// Projects Data (if needed for projects page)
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rushikesh0022/portfolio",
    liveUrl: "https://rushikesh.dev",
    featured: true,
  },
  // Add more projects as needed
];

// Contact Information
export const contactInfo = {
  email: "contact@rushikesh.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  timezone: "PST",
};

// Personal Information
export const personalInfo = {
  name: "Rushikesh Reddy",
  title: "Full-Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.",
  avatar: "/avatar.jpg",
  resume: "/resume.pdf",
};

// Typewriter text options
export const typewriterStrings = [
  "Full-Stack Developer",
  "React Enthusiast", 
  "TypeScript Lover",
  "Problem Solver",
  "Coffee Addict ☕",
];
