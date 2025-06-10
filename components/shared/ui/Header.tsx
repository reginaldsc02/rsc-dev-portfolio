"use client";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HamburgerButton } from "./HamburgerButton";
import { ClerkProfileCard } from "./ClerkProfileCard";
import { NavigationType } from "../lib/types/NavigationType";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Header = ({
  navLinks,
  navDrawerOpen,
  setNavDrawerOpen,
  handleNavDrawerOpen,
}: { handleNavDrawerOpen: () => void } & NavigationType) => {
  return (
    <header className="min-h-16 px-5 sticky top-0 left-0 z-40 flex items-center justify-between border-b border-gray-950/10 dark:border-gray-50/10 bg-background">
      <div className="flex items-center justify-center">
        <div className="md:mr-2.5">
          <Logo onClick={() => setNavDrawerOpen(false)} />
        </div>

        <span className="hidden md:flex">|</span>

        <Navigation
          navLinks={navLinks}
          navDrawerOpen={navDrawerOpen}
          setNavDrawerOpen={setNavDrawerOpen}
        />
      </div>

      <HamburgerButton
        navDrawerOpen={navDrawerOpen}
        handleNavDrawerOpen={handleNavDrawerOpen}
      />

      <div className="hidden md:flex items-center justify-center gap-5">
        <SocialMediaLinks />
        <ClerkProfileCard />
      </div>
    </header>
  );
};
