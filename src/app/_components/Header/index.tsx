"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { MdCoffee } from "react-icons/md";
import { IconType } from "react-icons";

const NavLink = ({
  href,
  children,
  Icon,
}: {
  href: string;
  children: ReactNode;
  Icon?: IconType;
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`text-lg flex items-center gap-2 px-2 ${
        isActive
          ? "bg-gray-200 text-black"
          : "text-white hover:bg-gray-300 hover:text-black"
      }`}
    >
      {Icon && <Icon />} {children}
    </Link>
  );
};

export default function Header() {
  return (
    <div className="flex justify-between">
      <nav className="flex gap-4">
        {navLinks.map(({ name, href, icon: Icon }) => (
          <NavLink key={href} href={href} Icon={Icon}>
            {name}
          </NavLink>
        ))}
      </nav>
      <Link
        href="/coffee"
        className="text-lg flex items-center gap-2 px-2 bg-blue-200 text-black"
      >
        buy me a coffee?
        <MdCoffee className="text-lg" />
      </Link>
    </div>
  );
}
