import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "@/data/navLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PrimaryNavigationType } from "@/custom_types/PrimaryNavigationType";

export const PrimaryNavigationDesktop = ({
  activeLink,
  setActiveLink,
}: PrimaryNavigationType) => {
  const [userClickedNavLink, setUserClickedNavLink] = useState(false);

  const handleNavOnClick = (nav: { url: string }) => {
    setActiveLink(nav.url);
    setUserClickedNavLink(true);
  };

  return (
    <nav className="hidden lg:block">
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
                  : usePathname() === "/" && index === 0 && !userClickedNavLink
                  ? "border-primary!"
                  : ""
              }`}
            >
              {nav.title}
            </ReactScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
