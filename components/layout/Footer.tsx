import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
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

      <div className="mt-5 group">
        <hr className="opacity-10" />
        <ReactScrollLink
          to="hero"
          smooth
          spy
          onClick={() => {
            setActive("hero");
            toast.success("Yeeted to the top ✨");
          }}
          className="mt-2.5 flex items-center gap-1.5 cursor-pointer text-xs font-bold uppercase"
        >
          <span>
            <FaArrowUp className="group-hover:animate-bounce" />
          </span>
          <span>Scroll to top</span>
        </ReactScrollLink>
      </div>
    </footer>
  );
};
