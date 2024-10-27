import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoDocker,
  BiLogoTux,
  BiLogoReact,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoDiscordAlt,
} from "react-icons/bi";
import { Link, Skill } from "./types";
import { MdHome, MdPostAdd, MdWork } from "react-icons/md";

export const projectUrl = "https://github.com/RealTriassic";

export const navLinks: Link[] = [
  {
    name: "/home",
    href: "/",
    icon: MdHome,
  },
  {
    name: "/projects",
    href: "/projects",
    icon: MdWork,
  },
  {
    name: "/blog",
    href: "/blog",
    icon: MdPostAdd,
  },
];

export const socialLinks: Link[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/RealTriassic",
    icon: BiLogoTwitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/RealTriassic",
    icon: BiLogoGithub,
  },
  {
    name: "Discord",
    href: "https://triassic.dev/discord",
    icon: BiLogoDiscordAlt,
  },
];

export const skillBadges: Skill[] = [
  {
    name: "HTML5",
    icon: BiLogoHtml5,
  },
  {
    name: "CSS3",
    icon: BiLogoCss3,
  },
  {
    name: "JavaScript",
    icon: BiLogoJavascript,
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    name: "React",
    icon: BiLogoReact,
  },
  {
    name: "Java",
    icon: BiLogoJava,
  },
  {
    name: "Docker",
    icon: BiLogoDocker,
  },
  {
    name: "Linux",
    icon: BiLogoTux,
  },
];
