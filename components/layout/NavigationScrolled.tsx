import { Dispatch, SetStateAction } from "react";
import { Navigation } from "./Navigation";
import { HamburgerButton } from "../ui/HamburgerButton";
import { BiSolidDashboard } from "react-icons/bi";

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
      className={`w-fit lg:mx-auto lg:py-spacing-default-10px lg:pl-spacing-default-20px ${
        isIntersecting
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed bottom-spacing-default-20px lg:left-0 right-spacing-default-20px lg:right-0 border-2 border-solid border-gray-50/10 bg-gray-950 rounded-default-8px z-30 transition-opacity`}
    >
      <HamburgerButton
        icon={<BiSolidDashboard />}
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
