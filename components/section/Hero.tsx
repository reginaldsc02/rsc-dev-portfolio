import { Paragraph } from "../ui/Paragraph";
import { BiSearch } from "react-icons/bi";
import { LinkButton } from "../ui/LinkButton";

export const Hero = () => {
  return (
    <section id="hero" className="pt-14 grid gap-spacing-default-10px">
      <div className="p-spacing-default-20px py-2 flex md:items-center justify-between flex-col md:flex-row tracking-tighter border-y-default">
        <div className="text-default-opacity-50 lowercase">
          Meet Reginald Chand - full-stack developer, UX Enthusiast and
          experience architect.
        </div>

        <div className="lowercase font-medium text-sm flex items-center gap-spacing-default-6px">
          <div className="text-default md:text-default-opacity-50">
            #Open to work
          </div>

          <div
            role="img"
            aria-label="Open to work indicator"
            title="Open to work indicator"
            className="w-4 h-4 flex items-center justify-center border border-solid border-default rounded-full animate-pulse"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl text-balance font-bold text-default-opacity-50 tracking-tighter leading-6 md:leading-10 uppercase border-y-default">
        <div className="p-spacing-default-20px">
          <span className="text-default">I build experiences</span> where
          thoughtful code meets elegant design and real human need.
        </div>
      </h1>

      <div className="p-spacing-default-20px lowercase text-balance border-y-default">
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

      <div className="my-spacing-default-20px border-y-default">
        <LinkButton
          icon={<BiSearch />}
          text="View all Projects"
          href="/projects/all"
          target="_self"
        />
      </div>

      <blockquote className="flex justify-end pt-14 px-spacing-default-20px text-right text-default-opacity-50 border-y-default">
        <p className="max-w-[500px]">
          “In every line of code, a story whispers - where logic dances with,
          dreams, and software becomes soul.” - <b>ChatGPT</b> 💫
        </p>
      </blockquote>
    </section>
  );
};
