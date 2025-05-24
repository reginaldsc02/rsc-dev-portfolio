import { Dispatch, SetStateAction } from "react";
import { Navigation } from "./Navigation";
import { FaBars } from "react-icons/fa";
import { HamburgerButton } from "../ui/HamburgerButton";

export const NavigationScrolled = ({
  isIntersecting,
  active,
  setActive,
  isNavigationMenuOpen,
  handleNavigationMenuOpen,
  gitHubAccountLink,
}: {
  isIntersecting: boolean;
  active: string;
  isNavigationMenuOpen: boolean;
  handleNavigationMenuOpen: () => void;
  setActive: Dispatch<SetStateAction<string>>;
  gitHubAccountLink: string;
}) => {
  return (
    <div
      className={`w-fit lg:mx-auto lg:py-2.5 lg:pl-5 ${
        isIntersecting
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed bottom-5 lg:left-0 right-5 lg:right-0 border-2 border-solid border-gray-50/10 bg-gray-950 rounded-lg z-40 transition-opacity duration-200 ease-linear`}
    >
      <HamburgerButton
        buttonIcon={<FaBars />}
        aria-label="Open Menu"
        onClick={handleNavigationMenuOpen}
      />

      <div className="hidden md:block">
        <Navigation
          tag="div"
          ariaLabel="Secondary Navigation"
          active={active}
          setActive={setActive}
          isNavigationMenuOpen={isNavigationMenuOpen}
          handleNavigationMenuOpen={handleNavigationMenuOpen}
          gitHubAccountLink={gitHubAccountLink}
        />
      </div>
    </div>
  );
};
