"use client";

import Link from "next/link";
import { navLinks } from "../lib/constants/navLinks";
import { socialMediaLinks } from "../lib/constants/socialMediaLinks";
import { BiWindowClose, BiWindowOpen } from "react-icons/bi";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const handleNavDrawerOpen = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <header className="min-h-16 p-5 sticky top-0 left-0 z-40 flex items-center justify-between md:justify-evenly bg-background">
      <Link
        href={"/"}
        onClick={() => setNavDrawerOpen(false)}
        aria-label="Reginald Chand"
        className="lowercase hover:text-primary transition-colors"
      >
        @ReginaldChand
      </Link>

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

      <nav
        aria-expanded={navDrawerOpen ? true : false}
        className={`w-full h-[calc(100vh-4rem)] md:w-auto md:h-auto pb-2.5 md:pb-0 fixed md:static top-16 left-0 z-40 md:z-auto bg-background md:bg-transparent md:translate-x-0 transition-transform overflow-y-auto ${
          navDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col md:flex-row ml-2.5">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setNavDrawerOpen(!navDrawerOpen)}
              className="p-2.5 hover:text-primary transition-colors"
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="mt-5 ml-5 flex gap-2.5 md:hidden">
          {socialMediaLinks.map((sml) => (
            <li
              key={sml.id}
              onClick={() => setNavDrawerOpen(!navDrawerOpen)}
              className="hover:text-primary transition-colors"
            >
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
      </nav>

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
