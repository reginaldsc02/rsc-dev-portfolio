import Link from "next/link";
import { socialMediaLinks } from "../lib/constants/socialMediaLinks";
import { ClerkProfileCard } from "./ClerkProfileCard";
import { NavigationType } from "../lib/types/NavigationType";
import { NavLinkType } from "../lib/types/NavLinkType";

export const Navigation = ({
  navLinks,
  navDrawerOpen,
  setNavDrawerOpen,
}: NavigationType) => {
  return (
    <nav
      className={`w-full h-[calc(100vh-4rem)] md:w-auto md:h-auto pb-2.5 md:pb-0 fixed md:static top-16 left-0 z-40 md:z-auto bg-background md:bg-transparent md:translate-x-0 transition-transform overflow-y-auto ${
        navDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col md:flex-row mt-2.5 md:mt-0 ml-2.5 md:ml-0">
        {navLinks.map((nav: NavLinkType) => (
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

      <ClerkProfileCard />
    </nav>
  );
};
