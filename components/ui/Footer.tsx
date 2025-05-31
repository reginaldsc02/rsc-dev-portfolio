"use client";

import Link from "next/link";
import { useGitHubApi } from "@/api/useGitHubApi";
import { Paragraph } from "./Paragraph";
import { LabeledIcon } from "./LabeledIcon";
import { BiCode } from "react-icons/bi";
import { socialMediaLinks } from "@/data/socialMediaLinks";

export const Footer = () => {
  const response = useGitHubApi();

  return (
    <footer className="border-t-default">
      <div className="p-spacing-default-20px flex flex-col md:flex-row md:items-center justify-between gap-spacing-default-10px">
        <p className="text-default-opacity-50">
          &copy;{" "}
          <Link
            href={"https://github.com/reginaldsc02"}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            @reginaldsahilchand
          </Link>
          &nbsp;{new Date().getFullYear()}, All Rights Reserved.
        </p>

        <Paragraph
          paragraph="Designed & Developed with ❤️
            Powered by Next.js & TailwindCSS"
        />
      </div>

      <div className="p-spacing-default-10px border-y-default">
        <div className="w-full p-spacing-default-20px flex flex-col md:flex-row md:items-center md:justify-between gap-spacing-default-20px border-full-default rounded-default-8px">
          <div className="flex items-center gap-spacing-default-10px">
            <Link
              href="/projects/all"
              className="p-spacing-default-10px border-full-default rounded-full hover:border-primary! transition-all"
            >
              All Projects
            </Link>
          </div>

          <div className="mt-2 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-spacing-default-10px text-default-opacity-50">
            {socialMediaLinks.map((item) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.id}
                className="hover:text-primary transition-colors"
              >
                <LabeledIcon icon={item.icon} label={item.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-spacing-default-10px">
        <div className="lowercase text-balance">
          <div className="w-fit py-spacing-default-10px px-spacing-default-20px mb-spacing-default-10px border-full-default rounded-full">
            Today is: {new Date().toDateString()}
          </div>

          <div className="text-sm text-default-opacity-50">
            This website was last updated on:{" "}
            {response.data.updated_at
              ? new Date(response?.data?.updated_at).toLocaleString()
              : "Information currently unavailable"}
          </div>

          <Link
            href={"https://github.com/reginaldsc02/rsc-dev-portfolio"}
            target="_blank"
            rel="noreferrer"
            className="w-fit block hover:text-primary transition-colors"
          >
            <LabeledIcon icon={<BiCode />} label="View source code" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
