"use client";

import { FaGithub, FaUser } from "react-icons/fa";
import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "../data/navLinks";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

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

      <nav>
        <ul className="flex items-center gap-5">
          {navLinks.map((item) => (
            <li key={item.url}>
              <ReactScrollLink
                to={item.url}
                smooth
                spy
                onClick={() => setActive(item.url)}
                className={`flex items-center gap-2 cursor-pointer hover:text-gray-50 group transition-colors duration-200 ease-linear ${
                  active === item.url ? "text-primary" : "text-gray-50/50"
                }`}
              >
                <div>{item.icon}</div>
                <div className="group-active:scale-95">{item.title}</div>
              </ReactScrollLink>
            </li>
          ))}

          <li>
            <Link
              href={gitHubAccountLink || "/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="scale-125" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
