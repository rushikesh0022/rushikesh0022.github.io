import { projectUrl, socialLinks } from "@/lib/styles/data";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import Tooltip from "../Tooltip";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-6 p-4 text-black">
      <div className="bg-gray-300 shadow-md shadow-gray-200 rounded-full py-1 px-6 h-10 flex items-center">
        <p>© 2025 Rushikesh</p>
      </div>

      <div className="bg-gray-300 shadow-md shadow-gray-200 rounded-full py-1 px-6 h-10 flex items-center gap-6">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-transform duration-200 hover:translate-y-[-4px]"
          >
            <Tooltip text={label}>
              <Icon className="h-5 w-5 hover:h-8 hover:w-8" />
            </Tooltip>
          </Link>
        ))}
      </div>

      <Link href="https://github.com/rushikesh0022?tab=repositories" rel="noopener noreferrer">
        <div className="bg-gray-300 shadow-md shadow-gray-200 rounded-full py-1 px-6 h-10 flex items-center gap-3 transition-transform duration-200 hover:translate-y-[-4px]">
          <FaCode className="h-5 w-5" />
          <span>View Github Contributions</span>
        </div>
      </Link>
    </div>
  );
}
