import Link from "next/link";
import { socialMediaLinks } from "../lib/constants/socialMediaLinks";
import { Dispatch, SetStateAction } from "react";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

interface NavLinkType {
  id: string | number;
  href: string;
  title: string;
}

export const Navigation = ({
  navLinks,
  navDrawerOpen,
  setNavDrawerOpen,
}: {
  navLinks: Array<NavLinkType>;
  navDrawerOpen: boolean;
  setNavDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={`w-full h-[calc(100vh-4rem)] md:w-auto md:h-auto pb-2.5 md:pb-0 fixed md:static top-16 left-0 z-40 md:z-auto bg-background md:bg-transparent md:translate-x-0 transition-transform overflow-y-auto ${
        navDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col md:flex-row mt-2.5 ml-2.5">
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

      <div
        className={`mt-8 ml-5 ${
          !pathname.startsWith("/admin") ? "hidden" : "md:hidden"
        }`}
      >
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
