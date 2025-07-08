import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoTux,
  BiLogoReact,
  BiLogoGithub,
  BiLogoCPlusPlus,
  BiLogoPython,
  BiLogoLinkedin,
} from "react-icons/bi";
import { SiC, SiR, SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { Link, Skill } from "./types";
import { MdHome, MdPostAdd, MdWork } from "react-icons/md";

export const projectUrl = "https://github.com/rushikesh0022";

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
    name: "GitHub",
    href: "https://github.com/rushikesh0022",
    icon: BiLogoGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rushikesh-reddy-153103293/",
    icon: BiLogoLinkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/KLVR/",
    icon: SiLeetcode,
  },
  {
    name: "CodeChef",
    href: "https://www.codechef.com/users/rushikesh_1984",
    icon: SiCodechef,
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/rushikesh660080",
    icon: SiCodeforces,
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
    name: "C",
    icon: SiC,
  },
  {
    name: "C++",
    icon: BiLogoCPlusPlus,
  },
  {
    name: "Python",
    icon: BiLogoPython,
  },
  {
    name: "R",
    icon: SiR,
  },
  {
    name: "Linux",
    icon: BiLogoTux,
  },
];
