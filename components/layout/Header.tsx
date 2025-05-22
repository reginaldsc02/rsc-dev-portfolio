"use client";

import { FaGithub, FaUser } from "react-icons/fa";
import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "../data/navLinks";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Navigation } from "./Navigation";

export const Header = ({
  active,
  setActive,
  logoName,
  gitHubAccountLink,
  websiteVersion,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  logoName: string;
  gitHubAccountLink: string;
  websiteVersion: string;
}) => {
  return (
    <header className="px-5 py-4 flex items-center justify-between border-b-[1px] border-solid border-b-gray-100/10">
      <div className="flex items-center gap-3.5">
        <ReactScrollLink
          to="hero"
          smooth
          spy
          onClick={() => setActive("hero")}
          className="cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <div className="p-2.5 border-[1px] border-solid border-gray-100/25 rounded-full">
              <FaUser className="scale-110 group-hover:text-primary transition-colors duration-200 ease-linear" />
            </div>

            <div className="text-xl font-medium lowercase">
              {logoName || "Logo Name"}
            </div>
          </div>
        </ReactScrollLink>

        <div className="px-2 py-1 text-xs font-semibold text-gray-50/80 tracking-wide bg-gray-50/10 rounded-full">
          <span>v</span>
          {websiteVersion || "Website Version"}
        </div>
      </div>

      <Navigation
        tag="nav"
        ariaLabel="Primary Navigation"
        active={active}
        setActive={setActive}
        gitHubAccountLink={gitHubAccountLink}
      />
    </header>
  );
};
