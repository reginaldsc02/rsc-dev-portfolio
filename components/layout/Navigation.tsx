"use client";

import { FaGithub } from "react-icons/fa";
import { Link as ReactScrollLink } from "react-scroll";
import { navLinks } from "../data/navLinks";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export const Navigation = ({
  tag = "nav",
  ariaLabel,
  active,
  setActive,
  gitHubAccountLink,
}: {
  tag: React.HTMLElementType;
  ariaLabel?: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  gitHubAccountLink: string;
}) => {
  const Tag = tag;

  return (
    <Tag aria-label={ariaLabel}>
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
            aria-label="Visit GitHub Profile"
          >
            <FaGithub className="scale-125" />
          </Link>
        </li>
      </ul>
    </Tag>
  );
};
