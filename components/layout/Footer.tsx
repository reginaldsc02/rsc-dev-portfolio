import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGitHubApi } from "@/api/useGitHubApi";
import { BorderControl } from "../ui/BorderControl";
import { PaddingInner } from "../ui/PaddingInner";
import { Paragraph } from "../ui/Paragraph";
import { PaddingOuter } from "../ui/PaddingOuter";
import { LabeledIcon } from "../ui/LabeledIcon";
import {
  BiCode,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiUpArrow,
} from "react-icons/bi";

export const Footer = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  const [currentDate, setCurrentDate] = useState<number | null>(null);
  const response = useGitHubApi();

  useEffect(() => {
    const date = new Date().getFullYear();
    setCurrentDate(date);
  }, []);

  return (
    <footer>
      <BorderControl borderY>
        <PaddingInner>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
            <p>
              &copy;{" "}
              <Link
                href={"https://github.com/reginaldsc02"}
                target="_blank"
                rel="noreferrer"
                className="underline font-bold text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-sm"
              >
                Reginald Sahil Chand
              </Link>{" "}
              - {currentDate}, All Rights Reserved.
            </p>

            <Paragraph
              paragraph="Designed & Developed with ❤️
            Powered by Next.js & TailwindCSS"
            />
          </div>
        </PaddingInner>

        <BorderControl borderY>
          <PaddingOuter>
            <BorderControl borderFull isRounded>
              <PaddingInner>
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <ReactScrollLink
                    to="hero"
                    smooth
                    spy
                    onClick={() => {
                      setActive("hero");
                      toast.success("Yeeted to the top ✨");
                    }}
                    className="cursor-pointer text-xs font-bold uppercase"
                  >
                    <LabeledIcon icon={<BiUpArrow />} label="Scroll to top" />
                  </ReactScrollLink>

                  <div className="mt-2 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-2.5 text-gray-50/50">
                    <Link
                      href={"https://www.linkedin.com/in/reginaldsc02/"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-md"
                    >
                      <BiLogoLinkedin />
                      <div className="active:scale-95">LinkedIn</div>
                    </Link>

                    <Link
                      href={"https://github.com/reginaldsc02"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-md"
                    >
                      <BiLogoGithub />
                      <div className="active:scale-95">GitHub</div>
                    </Link>

                    <Link
                      href={"https://www.facebook.com/reginaldsc02/"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-md"
                    >
                      <BiLogoFacebook />
                      <div className="active:scale-95">Facebook</div>
                    </Link>
                  </div>
                </div>
              </PaddingInner>
            </BorderControl>
          </PaddingOuter>
        </BorderControl>

        <PaddingOuter>
          <div className="lowercase text-balance">
            <div className="flex items-center gap-2 text-sm text-gray-50/50">
              This website was last updated on:{" "}
              {response.data.updated_at
                ? new Date(response?.data?.updated_at).toLocaleString()
                : "Information currently unavailable"}
            </div>

            <Link
              href={"https://github.com/reginaldsc02/rsc-dev-portfolio"}
              target="_blank"
              rel="noreferrer"
              className="w-fit flex items-center gap-1.5 lowercase group"
            >
              <BiCode className="group-hover:animate-pulse" />
              <div className="group-active:scale-95"> View source code</div>
            </Link>
          </div>
        </PaddingOuter>
      </BorderControl>
    </footer>
  );
};
