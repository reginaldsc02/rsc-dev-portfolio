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
import { BiCode, BiUpArrow } from "react-icons/bi";
import { socialMediaLinks } from "@/data/socialMediaLinks";

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
            <p className="text-gray-50/50">
              &copy;{" "}
              <Link
                href={"https://github.com/reginaldsc02"}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:text-gray-50 transition-colors duration-200 ease-linear"
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
                    {socialMediaLinks.map((item) => (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        key={item.id}
                        className="hover:text-gray-50 transition-colors duration-200 ease-linear"
                      >
                        <LabeledIcon icon={item.icon} label={item.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </PaddingInner>
            </BorderControl>
          </PaddingOuter>
        </BorderControl>

        <PaddingOuter>
          <div className="lowercase text-balance">
            <div className="text-sm text-gray-50/50">
              This website was last updated on:{" "}
              {response.data.updated_at
                ? new Date(response?.data?.updated_at).toLocaleString()
                : "Information currently unavailable"}
            </div>

            <Link
              href={"https://github.com/reginaldsc02/rsc-dev-portfolio"}
              target="_blank"
              rel="noreferrer"
              className="w-fit block"
            >
              <LabeledIcon icon={<BiCode />} label="View source code" />
            </Link>
          </div>
        </PaddingOuter>
      </BorderControl>
    </footer>
  );
};
