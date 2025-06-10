"use client";

import { navLinks } from "../lib/constants/navLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HamburgerButton } from "./HamburgerButton";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const LandingPageHeader = () => {
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

      <SocialMediaLinks />
    </header>
  );
};
