import { ButtonLink } from "@/components/shared/ui/ButtonLink";
import { DisplayText } from "@/components/shared/ui/DisplayText";
import { Heading } from "@/components/shared/ui/Heading";
import { Paragraph } from "@/components/shared/ui/Paragraph";
import { Section } from "@/components/shared/ui/Section";

export const Hero = () => {
  return (
    <Section>
      <h1>
        <DisplayText text="I build experiences where thoughtful code meets elegant design and real human need." />
      </h1>

      <Paragraph
        text="With a passion for elegant code and user first design, I engineer
            full-stack solutions that are as scalable as they are seamless. Every project I build is crafted with intention, blending clean architecture, intuitive interfaces, and a touch of creative soul. Whether it's backend logic or frontend finesse, I deliver software that feels as good as it functions."
      />

      <ButtonLink text="Explore projects" href={"/projects/all"} />
    </Section>
  );
};
