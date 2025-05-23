"use client";

import { FaGithub } from "react-icons/fa";
import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "../data/navLinks";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

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
      className={`w-full lg:w-auto h-screen lg:h-auto fixed top-0 left-0 bg-gray-950 lg:bg-transparent lg:static z-50 lg:z-auto lg:translate-x-0 transition-transform duration-200 ease-linear ${
        isNavigationMenuOpen ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto lg:overflow-y-hidden`}
    >
      <div className="mb-5 py-2.5 px-5 pr-2.5 flex items-center justify-between border-b-[1px] border-solid border-b-gray-50/10 lg:hidden">
        <div className="text-lg">Menu</div>

        <button
          onClick={handleNavigationMenuOpen}
          className="lg:hidden p-2.5 cursor-pointer rounded-full hover:text-red-500 transition-colors duration-200 ease-linear"
        >
          <MdClose className="text-2xl" />
        </button>
      </div>

      <ul className="h-screen lg:h-auto p-5 lg:p-0 lg:py-2.5 lg:pr-5 lg:flex lg:items-center lg:gap-5 text-2xl lg:text-base overflow-y-auto lg:overflow-hidden">
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
              className={`mb-10 lg:mb-0 pb-5 lg:pb-0 flex items-center gap-2 cursor-pointer border-b-[1px] border-solid border-b-gray-50/10 lg:border-none hover:text-gray-50 group transition-colors duration-200 ease-linear ${
                active === item.url ? "text-primary" : "text-gray-50/50"
              }`}
            >
              {item.icon}
              <div className="group-active:scale-95">{item.title}</div>
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
            className="flex items-center gap-2 text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear lg:block cursor-pointer rounded-full"
          >
            <FaGithub className="text-2xl" />
            <div className="lg:hidden">GitHub</div>
          </Link>
        </li>
      </ul>
    </Tag>
  );
};
