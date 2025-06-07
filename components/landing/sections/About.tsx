import { Section } from "@/components/shared/ui/Section";
import { Heading } from "@/components/shared/ui/Heading";
import { Paragraph } from "@/components/shared/ui/Paragraph";
import { ButtonLink } from "@/components/shared/ui/ButtonLink";

export const About = () => {
  return (
    <Section>
      <Heading text="About Me" />
      <Paragraph text="I'm Reginald Chand, a dedicated and detail oriented web developer with a passion for creating seamless, scalable, and user centered digital experiences. With a strong foundation in both frontend and backend development, I focus on building reliable systems and clean interfaces that prioritize functionality, performance, and design integrity. Driven by curiosity, discipline, and a commitment to excellence, I approach every project with clarity, care, and a deep respect for quality craftsmanship. My goal is to contribute to meaningful, efficient solutions that serve users and stand the test of time. #LGBTQ" />

      <div className="flex gap-5">
        <ButtonLink
          text="Download resume"
          href="/documents/resume-reginald-chand.pdf"
          primary
          download
        />

        <ButtonLink
          text="Preview resume"
          href="/documents/resume/"
          primary={false}
        />
      </div>
    </Section>
  );
};
