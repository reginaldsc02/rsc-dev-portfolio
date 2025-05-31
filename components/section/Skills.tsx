import { knownSkills } from "@/data/knownSkills";
import { Paragraph } from "../ui/Paragraph";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionParagraph } from "../ui/SectionParagraph";
import { LabeledIcon } from "../ui/LabeledIcon";

export const Skills = () => {
  return (
    <section id="skills" className="p-spacing-default-10px border-t-default">
      <div className="border-y-default p-spacing-default-10px">
        <SectionHeader
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

      <ul className="mt-spacing-default-10px p-spacing-default-10px border-full-default rounded-default-8px grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-spacing-default-10px">
        {knownSkills.map((skill) => (
          <li
            className={`w-full p-spacing-default-20px border-full-default rounded-default-8px`}
            key={skill.id}
          >
            <LabeledIcon icon={skill.icon} label={skill.title} isLargeIcon />
          </li>
        ))}
      </ul>
    </section>
  );
};
