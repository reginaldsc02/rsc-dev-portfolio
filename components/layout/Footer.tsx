import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaArrowUp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

export const Footer = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  const [currentDate, setCurrentDate] = useState<number | null>(null);

  useEffect(() => {
    const date = new Date().getFullYear();
    setCurrentDate(date);
  }, []);

  return (
    <footer className="px-2.5 md:px-5 py-4 border-t-[1px] border-solid border-t-gray-100/10">
      <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 border-[1px] border-solid border-gray-100/10 rounded-lg">
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

        <p className="text-gray-50/50">
          Designed & Developed with <span className="text-gray-50">❤️</span> |
          Powered by Next.js & TailwindCSS
        </p>
      </div>

      <div className="w-full mt-5 py-5 pb-0 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t-[1px] border-solid border-t-gray-50/10">
        <div className="group">
          <ReactScrollLink
            to="hero"
            smooth
            spy
            onClick={() => {
              setActive("hero");
              toast.success("Yeeted to the top ✨");
            }}
            className="flex items-center gap-1.5 cursor-pointer text-xs font-bold uppercase"
          >
            <FaArrowUp className="group-hover:animate-bounce" />
            Scroll to top
          </ReactScrollLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-gray-50/50">
          <Link
            href={"https://www.linkedin.com/in/reginaldsc02/"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-md"
          >
            <FaLinkedin />
            <div className="active:scale-95">LinkedIn</div>
          </Link>

          <Link
            href={"https://github.com/reginaldsc02"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-md"
          >
            <FaGithub />
            <div className="active:scale-95">GitHub</div>
          </Link>

          <Link
            href={"https://www.facebook.com/reginaldsc02/"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-50 transition-colors duration-200 ease-linear rounded-md"
          >
            <FaFacebook />
            <div className="active:scale-95">Facebook</div>
          </Link>
        </div>
      </div>
    </footer>
  );
};
