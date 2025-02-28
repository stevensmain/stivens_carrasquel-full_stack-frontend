"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-foreground/80 ${
        isActive ? "text-primary font-semibold" : "text-foreground"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
