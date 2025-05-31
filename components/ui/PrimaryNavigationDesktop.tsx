import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "@/data/navLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PrimaryNavigationType } from "@/custom_types/PrimaryNavigationType";
import Link from "next/link";

export const PrimaryNavigationDesktop = ({
  activeLink,
  setActiveLink,
}: PrimaryNavigationType) => {
  const [userClickedNavLink, setUserClickedNavLink] = useState(false);
  const pathname = usePathname();

  const handleNavOnClick = (nav: { url: string }) => {
    setActiveLink(nav.url);
    setUserClickedNavLink(true);
  };

  return (
    <nav className="hidden lg:block">
      {pathname !== "/" ? (
        <Link
          href="/"
          className="p-spacing-default-10px border-full-default rounded-full hover:border-primary! transition-all"
        >
          Home
        </Link>
      ) : (
        <ul className="flex gap-spacing-default-10px">
          {navLinks?.map((nav, index) => (
            <li key={nav.url}>
              <ReactScrollLink
                to={nav.url}
                smooth
                spy
                onClick={() => handleNavOnClick(nav)}
                className={`px-2 py-1 block cursor-pointer border-full-default rounded-full hover:border-primary! transition-all ${
                  activeLink === nav.url
                    ? "border-primary!"
                    : pathname === "/" && index === 0 && !userClickedNavLink
                    ? "border-primary!"
                    : ""
                }`}
              >
                {nav.title}
              </ReactScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
