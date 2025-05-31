import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "@/data/navLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HamburgerButton } from "./HamburgerButton";
import { BiCollapseHorizontal } from "react-icons/bi";
import { SocialMediaNavigation } from "./SocialMediaNavigation";
import { PrimaryNavigationType } from "@/custom_types/PrimaryNavigationType";

export const PrimaryNavigationMobile = ({
  activeLink,
  setActiveLink,
  primaryDrawer,
  handlePrimaryDrawer,
}: PrimaryNavigationType & {
  primaryDrawer: boolean;
  handlePrimaryDrawer: () => void;
}) => {
  const [userClickedNavLink, setUserClickedNavLink] = useState(false);

  const handleNavOnClick = (nav: { url: string }) => {
    setActiveLink(nav.url);
    handlePrimaryDrawer();
    setUserClickedNavLink(true);
  };

  return (
    <nav
      className={`w-full h-screen fixed top-0 left-0 lg:hidden z-50 bg-gray-950 overflow-y-auto transition-transform ${
        primaryDrawer ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-16 p-spacing-default-10px flex items-center justify-between border-b-default">
        <div className="text-default-opacity-50">Menu 😁</div>
        <HamburgerButton
          icon={<BiCollapseHorizontal />}
          onClick={handlePrimaryDrawer}
        />
      </div>
      <ul className="h-full mt-spacing-default-10px p-spacing-default-10px block overflow-y-auto">
        {navLinks?.map((nav, index) => (
          <li key={nav.url}>
            <ReactScrollLink
              to={nav.url}
              smooth
              spy
              onClick={() => handleNavOnClick(nav)}
              className={`p-spacing-default-20px mb-spacing-default-20px text-2xl block cursor-pointer border-full-default rounded-full hover:border-primary! transition-all ${
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

        <div className="my-16 flex items-center justify-center">
          <SocialMediaNavigation />
        </div>

        <div className="p-spacing-default-20px text-center">
          <div>
            <div>&copy; Reginald Sahil Chand</div>
            <div className="text-default-opacity-50">
              {new Date().toDateString()}
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};
