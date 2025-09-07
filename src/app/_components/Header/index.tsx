"use client";

import { navLinks } from "@/lib/styles/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(href === pathname);
  }, [href, pathname]);

  return (
    <Link
      href={href}
      className={`text-lg flex items-center gap-2 px-2 ${
        isActive
          ? "bg-gray-200 text-black"
          : "text-white hover:bg-gray-300 hover:text-black"
      }`}
      suppressHydrationWarning={true}
    >
      {Icon && <Icon />} {children}
    </Link>
  );
};

export default function Header() {
  return (
    <div className="flex justify-between">
      <nav className="flex gap-4">
        {navLinks.map(({ label, href, icon: Icon }) => (
          <NavLink key={href} href={href} Icon={Icon}>
            {label}
          </NavLink>
        ))}
      </nav>
      <Link
        href="/coffee"
        className="text-lg flex items-center gap-2 px-2 bg-blue-200 text-black"
        suppressHydrationWarning={true}
      >
        Contact Me?
        <MdCoffee className="text-lg" />
      </Link>
    </div>
  );
}
