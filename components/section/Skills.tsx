import { FaReact } from "react-icons/fa";
import { knownSkills } from "@/data/knownSkills";
import { Title } from "../ui/Title";
import { Subtitle } from "../ui/Subtitle";

export const Skills = () => {
  return (
    <section id="skills" className="my-5 p-2.5 border-y-default">
      <div className="w-full flex items-start justify-center flex-col p-2.5 border-y-default">
        <Title icon={<FaReact />} title="The Arsenal of Alchemy" />
        <Subtitle subtitle="Crafting Magic with Code & Craft" />

        <p className="md:max-w-[95%] tracking-wide text-gray-50/50">
          Behind every flawless system is a toolbox wielded with mastery and
          heart. From the quiet hum of backend servers to the rhythmic pulse of
          APIs, my skills are the sparks that ignite innovation and keep the
          engine roaring - precise, polished, and powerful. These are the
          languages, tools, and frameworks I bend to my will, crafting solutions
          that don&apos;t just work, but resonate. Ready to dive in? Here&apos;s
          what&apos;s in my arsenal.
        </p>
      </div>

      <div className="mt-5 p-2.5 grid border-full-default rounded-lg">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {knownSkills.map((skill) => (
            <li
              className={`w-full p-5 flex items-center gap-2 border-full-default rounded-lg`}
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
