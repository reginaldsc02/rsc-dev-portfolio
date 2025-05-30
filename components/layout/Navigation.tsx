import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "@/data/navLinks";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { HamburgerButton } from "../ui/HamburgerButton";
import { BiCross, BiLogoGithub } from "react-icons/bi";
import { LabeledIcon } from "../ui/LabeledIcon";

export const Navigation = ({
  tag = "nav",
  ariaLabel,
  active,
  setActive,
  isNavigationMenuOpen,
  handleNavigationMenuOpen,
  gitHubAccountLink,
}: {
  tag: React.HTMLElementType;
  ariaLabel?: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  isNavigationMenuOpen: boolean;
  handleNavigationMenuOpen: () => void;
  gitHubAccountLink: string;
}) => {
  const Tag = tag;

  return (
    <Tag
      aria-label={ariaLabel}
      className={`w-full lg:w-auto h-screen lg:h-auto fixed top-0 left-0 bg-gray-950 lg:bg-transparent lg:static z-40 lg:z-auto lg:translate-x-0 transition-transform ${
        isNavigationMenuOpen ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto lg:overflow-y-hidden`}
    >
      <div className="mb-spacing-default-20px py-spacing-default-10px px-spacing-default-20px pr-spacing-default-10px lg:hidden flex items-center justify-between border-b-default">
        <div className="text-lg">Menu</div>

        <HamburgerButton
          icon={<BiCross />}
          aria-label="Close Menu"
          onClick={handleNavigationMenuOpen}
        />
      </div>

      <ul className="h-screen lg:h-auto p-spacing-default-20px lg:p-0 lg:py-spacing-default-10px lg:pr-spacing-default-20px lg:flex lg:items-center lg:gap-spacing-default-20px text-2xl lg:text-base overflow-y-auto lg:overflow-hidden">
        {navLinks.map((item) => (
          <li key={item.url}>
            <ReactScrollLink
              to={item.url}
              smooth
              spy
              onClick={() => {
                setActive(item.url);
                handleNavigationMenuOpen();
              }}
              className={`mb-10 lg:mb-0 pb-spacing-default-20px lg:pb-0 block cursor-pointer border-b-default lg:border-none hover:text-default group transition-colors ${
                active === item.url ? "text-primary" : "text-default-opacity-50"
              }`}
            >
              <LabeledIcon icon={item.icon} label={item.title} />
            </ReactScrollLink>
          </li>
        ))}

        <li>
          <Link
            href={gitHubAccountLink || "/"}
            onClick={handleNavigationMenuOpen}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub Profile"
            className="flex items-center gap-spacing-default-6px text-default-opacity-50 hover:text-default transition-colors lg:block cursor-pointer rounded-full"
          >
            <BiLogoGithub className="text-2xl" />
            <div className="lg:hidden">GitHub</div>
          </Link>
        </li>
      </ul>
    </Tag>
  );
};
