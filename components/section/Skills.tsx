import { FaReact } from "react-icons/fa";
import { knownSkills } from "../data/knownSkills";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="my-5 p-2.5 border-y-[1px] border-solid border-y-gray-50/10"
    >
      <div className="w-full flex items-start justify-center flex-col p-2.5 border-y-[1px] border-solid border-y-gray-50/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2.5">
          <div className="flex items-center gap-1.5 text-balance capitalize text-4xl font-bold">
            <FaReact className="hidden md:block animate-spin" />
            <span className="font-medium">The Arsenal of Alchemy</span>
            <FaReact className="hidden md:block animate-spin" />
          </div>

          <p className="italic tracking-wide text-gray-50/50">
            Crafting Magic with Code & Craft
          </p>
        </div>

        <p className="mt-5 tracking-wide">
          Behind every flawless system is a toolbox wielded with mastery and
          heart. From the quiet hum of backend servers to the rhythmic pulse of
          APIs, my skills are the sparks that ignite innovation and keep the
          engine roaring - precise, polished, and powerful. These are the
          languages, tools, and frameworks I bend to my will, crafting solutions
          that don&apos;t just work, but resonate. Ready to dive in? Here&apos;s
          what&apos;s in my arsenal.
        </p>
      </div>

      <div className="mt-5 p-2.5 grid border-[1px] border-solid border-gray-50/10 rounded-lg">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {knownSkills.map((skill) => (
            <li
              className={`w-full p-5 flex items-center gap-2 border-[1px] border-solid border-gray-50/10 rounded-lg hover:border-gray-50 transition-all duration-200 ease-linear`}
              key={skill.id}
            >
              <span className="scale-125">{skill.icon}</span>
              <span className="capitalize">{skill.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
