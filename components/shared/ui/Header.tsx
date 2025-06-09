"use client";

import Link from "next/link";
import { navLinks } from "../lib/constants/navLinks";
import { socialMediaLinks } from "../lib/constants/socialMediaLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HamburgerButton } from "./HamburgerButton";

export const Header = () => {
  const pathname = usePathname();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  const handleNavDrawerOpen = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <header className="min-h-16 px-5 sticky top-0 left-0 z-40 flex items-center justify-between md:justify-evenly border-b border-gray-950/10 dark:border-gray-50/10 bg-background">
      <Logo onClick={() => setNavDrawerOpen(false)} />

      <HamburgerButton
        navDrawerOpen={navDrawerOpen}
        handleNavDrawerOpen={handleNavDrawerOpen}
      />

      <Navigation
        navLinks={navLinks}
        navDrawerOpen={navDrawerOpen}
        setNavDrawerOpen={setNavDrawerOpen}
      />

      <ul className="hidden md:flex gap-2.5">
        {socialMediaLinks.map((sml) => (
          <li key={sml.id} className="hover:text-primary transition-colors">
            <Link
              href={sml.href}
              aria-label={sml.title}
              target="_blank"
              rel="noreferrer"
            >
              {sml.icon}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
