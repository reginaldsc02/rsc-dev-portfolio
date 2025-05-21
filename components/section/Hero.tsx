"use client";

import { FaSearch } from "react-icons/fa";
import { PrimaryButton } from "../ui/Buttons";
import { Link } from "react-scroll";
import { Dispatch, SetStateAction } from "react";

export const Hero = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section id="hero">
      <div className="pt-14 grid gap-2.5">
        <div className="flex items-center justify-between text-gray-50/50 tracking-tighter border-y-[1px] border-solid border-y-gray-50/10">
          <div className="pl-5 py-2 lowercase">
            Meet Reginald Chand - full-stack developer, UX Enthusiast and
            experience architect.
          </div>

          <div className="pr-5 lowercase font-medium text-sm flex items-center gap-1.5">
            <div>#Open to work</div>
            <div className="w-4 h-4 flex items-center justify-center border-[1px] border-solid border-gray-50 rounded-full animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <h1 className="p-5 text-5xl text-balance font-bold text-gray-50/50 tracking-tighter leading-10 uppercase border-y-[1px] border-solid border-y-gray-50/10">
          <span className="text-gray-50">I build experiences</span> where
          thoughtful code meets elegant design and real human need.
        </h1>

        <div className="p-5 text-balance border-y-[1px] border-solid border-y-gray-50/10">
          <p>
            With a passion for elegant code and user-first design, I engineer
            full-stack solutions that are as scalable as they are seamless.
          </p>
          <p>
            Every project I build is crafted with intention - blending clean
            architecture, intuitive interfaces, and a touch of creative soul.
          </p>
          <p>
            Whether it's backend logic or frontend finesse, I deliver software
            that feels as good as it functions.
          </p>
        </div>

        <div className="my-5 border-y-[1px] border-solid border-y-gray-50/10">
          <div className="w-fit">
            <Link
              to="projects"
              smooth
              spy
              onClick={() => setActive("projects")}
            >
              <PrimaryButton
                buttonText="View Projects"
                buttonIcon={<FaSearch />}
              />
            </Link>
          </div>
        </div>

        <blockquote className="pt-10 px-5 text-right text-gray-50/50 border-b-[1px] border-dashed border-b-gray-50/10">
          <p>
            “In every line of code, a story whispers - where logic dances with,
          </p>
          <p>
            dreams, and software becomes soul.” - <b>ChatGPT</b> 💫
          </p>
        </blockquote>
      </div>
    </section>
  );
};
