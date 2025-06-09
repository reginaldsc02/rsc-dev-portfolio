"use client";

import Link from "next/link";
import { navLinks } from "../lib/constants/navLinks";
import { socialMediaLinks } from "../lib/constants/socialMediaLinks";
import { BiWindowClose, BiWindowOpen } from "react-icons/bi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const handleNavDrawerOpen = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <header className="min-h-16 p-5 sticky top-0 left-0 z-40 flex items-center justify-between md:justify-evenly bg-background">
      <Logo onClick={() => setNavDrawerOpen(false)} />

      <button
        type="button"
        aria-label={
          navDrawerOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={handleNavDrawerOpen}
        className="md:hidden cursor-pointer hover:text-primary transition-colors"
      >
        {navDrawerOpen ? <BiWindowClose /> : <BiWindowOpen />}
      </button>

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
