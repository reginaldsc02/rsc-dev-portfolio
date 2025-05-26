import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/Button";
import { Link } from "react-scroll";
import { Dispatch, SetStateAction } from "react";
import { Paragraph } from "../ui/Paragraph";

export const Hero = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section id="hero">
      <div className="pt-14 grid gap-2.5">
        <div className="p-5 py-2 flex md:items-center justify-between flex-col md:flex-row text-gray-50/50 tracking-tighter border-y-default">
          <div className="lowercase">
            Meet Reginald Chand - full-stack developer, UX Enthusiast and
            experience architect.
          </div>

          <div className="lowercase font-medium text-sm flex items-center gap-1.5">
            <div className="text-gray-50 md:text-gray-50/50">#Open to work</div>

            <div
              role="img"
              aria-label="Open to work indicator"
              title="Open to work indicator"
              className="w-4 h-4 flex items-center justify-center border-[1px] border-solid border-gray-50 rounded-full animate-pulse"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <h1 className="p-5 text-3xl md:text-5xl text-balance font-bold text-gray-50/50 tracking-tighter leading-6 md:leading-10 uppercase border-y-default">
          <span className="text-gray-50">I build experiences</span> where
          thoughtful code meets elegant design and real human need.
        </h1>

        <div className="p-5 lowercase text-balance border-y-default">
          <Paragraph
            paragraph=" With a passion for elegant code and user-first design, I engineer
            full-stack solutions that are as scalable as they are seamless."
          />

          <Paragraph
            paragraph="Every project I build is crafted with intention, blending clean
            architecture, intuitive interfaces, and a touch of creative soul."
            isImportant
          />

          <Paragraph
            paragraph=" Whether it's backend logic or frontend finesse, I deliver
            software that feels as good as it functions."
          />
        </div>

        <div className="my-5 border-y-default">
          <div className="w-fit">
            <Link
              to="projects"
              smooth
              spy
              onClick={() => setActive("projects")}
            >
              <Button buttonIcon={<FaSearch />} buttonText="View Projects" />
            </Link>
          </div>
        </div>

        <blockquote className="flex items-center justify-end pt-10 px-5 text-right text-gray-50/50 border-b-[1px] border-dashed border-b-gray-50/10">
          <p className="max-w-[500px]">
            “In every line of code, a story whispers - where logic dances with,
            dreams, and software becomes soul.” - <b>ChatGPT</b> 💫
          </p>
        </blockquote>
      </div>
    </section>
  );
};
