import { currentSkills } from "@/components/shared/lib/constants/currentSkills";
import { Heading } from "@/components/shared/ui/Heading";
import { NotFound } from "@/components/shared/ui/NotFound";
import { Paragraph } from "@/components/shared/ui/Paragraph";
import { Section } from "@/components/shared/ui/Section";

export const Skills = () => {
  return (
    <Section>
      <Heading text="Skills & Expertise" />
      <Paragraph text="Over the years, I've cultivated a versatile skill set that spans both frontend and backend development, enabling me to build seamless, scalable, and user focused digital experiences. I'm proficient in modern technologies and frameworks, with a strong emphasis on clean code, performance, and maintainability. Whether architecting robust systems or crafting intuitive interfaces, I approach every task with clarity, care, and a deep respect for craftsmanship. My toolbox is constantly evolving, but my commitment to quality and user impact remains unwavering." />

      <ul className="w-full md:w-auto grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentSkills && currentSkills.length > 0 ? (
          currentSkills.map((skill) => (
            <li
              className={`px-5 py-2.5 flex items-center justify-center gap-1.5 border border-gray-950/10 dark:border-gray-50/10 rounded-full`}
              key={skill.id}
            >
              {skill.icon} {skill.title}
            </li>
          ))
        ) : (
          <NotFound text="Current skills not found!" />
        )}
      </ul>
    </Section>
  );
};
