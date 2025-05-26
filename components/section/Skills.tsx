import { FaReact } from "react-icons/fa";
import { knownSkills } from "@/data/knownSkills";
import { Paragraph } from "../ui/Paragraph";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionParagraph } from "../ui/SectionParagraph";

export const Skills = () => {
  return (
    <section id="skills" className="my-5 p-2.5 border-y-default">
      <div className="w-full flex items-start justify-center flex-col p-2.5 border-y-default">
        <SectionHeader
          icon={<FaReact />}
          title="The Arsenal of Alchemy"
          subtitle="Crafting Magic with Code & Craft"
        />

        <SectionParagraph>
          <Paragraph
            paragraph="Behind every flawless system is a toolbox wielded with mastery and
          heart. From the quiet hum of backend servers to the rhythmic pulse of
          APIs, my skills are the sparks that ignite innovation and keep the
          engine roaring - precise, polished, and powerful. These are the
          languages, tools, and frameworks I bend to my will, crafting solutions
          that don't just work, but resonate. Ready to dive in? Here's
          what's in my arsenal."
          />
        </SectionParagraph>
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
