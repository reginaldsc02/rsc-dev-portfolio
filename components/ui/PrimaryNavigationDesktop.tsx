import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "@/data/navLinks";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PrimaryNavigationType } from "@/custom_types/PrimaryNavigationType";
import Link from "next/link";

export const PrimaryNavigationDesktop = ({
  activeLink,
  setActiveLink,
}: PrimaryNavigationType) => {
  const [userClickedNavLink, setUserClickedNavLink] = useState(false);
  const navLinksArray = useRef<(HTMLLIElement | null)[]>([]);
  const pathname = usePathname();

  const handleNavOnClick = (nav: { url: string }) => {
    setActiveLink(nav.url);
    setUserClickedNavLink(true);
  };

  useEffect(() => {
    if (navLinksArray.current) {
      const homeLink = navLinksArray.current[0]
        ?.firstElementChild as HTMLAnchorElement;

      if (homeLink) {
        if (activeLink === "home") {
          homeLink.style.borderColor = "var(--rsc-primary)";
        } else {
          homeLink.style.borderColor = "transparent";
        }
      }
    }
  }, [pathname, activeLink]);

  return (
    <nav className="hidden lg:block">
      {pathname !== "/" ? (
        <Link
          href="/"
          aria-label="Go to home page"
          onClick={() => setActiveLink("home")}
          className="px-2 py-1 block cursor-pointer border-full-default rounded-full hover:border-primary! transition-all"
        >
          Home
        </Link>
      ) : (
        <ul className="flex gap-spacing-default-10px">
          {navLinks?.map((nav, index) => (
            <li
              key={nav.url}
              ref={(el) => {
                navLinksArray.current[index] = el;
              }}
            >
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

          <Link
            href="/journals"
            className="px-2 py-1 block cursor-pointer border-full-default rounded-full hover:border-primary! transition-all"
          >
            Journals
          </Link>
        </ul>
      )}
    </nav>
  );
};
