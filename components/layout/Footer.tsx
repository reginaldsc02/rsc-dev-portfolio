import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FaArrowUp } from "react-icons/fa";

export const Footer = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <footer className="px-5 py-4 border-t-[1px] border-solid border-t-gray-100/10">
      <div className="p-5 flex items-center justify-between border-[1px] border-solid border-gray-100/10 rounded-lg">
        <p>
          &copy;{" "}
          <Link
            href={"https://github.com/reginaldsc02"}
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear"
          >
            Reginald Sahil Chand
          </Link>{" "}
          - 2025, All Rights Reserved.
        </p>

        <p className="text-gray-50/50">
          Designed & Developed with <span className="text-gray-50">❤️</span> |
          Powered by Next.js & TailwindCSS
        </p>
      </div>

      <div className="mt-5">
        <hr className="opacity-10" />
        <ReactScrollLink
          to="hero"
          smooth
          spy
          onClick={() => setActive("hero")}
          className="mt-2.5 flex items-center gap-1.5 cursor-pointer text-xs font-bold uppercase"
        >
          <span>
            <FaArrowUp />
          </span>
          <span>Move to top</span>
        </ReactScrollLink>
      </div>
    </footer>
  );
};
