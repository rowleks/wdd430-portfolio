"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm font-medium" aria-label="Primary">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={
              isActive
                ? "text-foreground transition-colors"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
