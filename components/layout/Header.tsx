import { Link as ReactScrollLink } from "react-scroll";
import { Dispatch, SetStateAction } from "react";
import { Navigation } from "./Navigation";
import { HamburgerButton } from "../ui/HamburgerButton";
import { BiSolidDashboard, BiSolidUserAccount } from "react-icons/bi";

export const Header = ({
  active,
  setActive,
  isNavigationMenuOpen,
  handleNavigationMenuOpen,
  logoName,
  gitHubAccountLink,
  websiteVersion,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  isNavigationMenuOpen: boolean;
  handleNavigationMenuOpen: () => void;
  logoName: string;
  gitHubAccountLink: string;
  websiteVersion: string;
}) => {
  return (
    <header className="w-full py-2.5 pl-5 pr-2.5 lg:pr-0 flex items-center justify-between border-b-default">
      <div className="flex items-center gap-3.5">
        <ReactScrollLink
          to="about"
          smooth
          onClick={() => setActive("about")}
          className="cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <div className="p-2.5 border-2 border-solid border-gray-100/25 group-hover:border-gray-50 rounded-full transition-all duration-200 ease-linear">
              <BiSolidUserAccount className="text-gray-50/50 group-hover:text-gray-50 transition-colors duration-200 ease-linear" />
            </div>

            <div className="text-xl lowercase">{logoName || "Logo Name"}</div>
          </div>
        </ReactScrollLink>

        <div className="px-2 py-1 text-xs text-gray-50/80 tracking-wide bg-gray-50/10 rounded-full">
          v{websiteVersion || "Website Version"}
        </div>
      </div>

      <Navigation
        tag="nav"
        ariaLabel="Primary Navigation"
        active={active}
        setActive={setActive}
        isNavigationMenuOpen={isNavigationMenuOpen}
        handleNavigationMenuOpen={handleNavigationMenuOpen}
        gitHubAccountLink={gitHubAccountLink}
      />

      <HamburgerButton
        buttonIcon={<BiSolidDashboard />}
        aria-label="Open Menu"
        onClick={handleNavigationMenuOpen}
      />
    </header>
  );
};
