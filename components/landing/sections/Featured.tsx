import { featuredProjectsList } from "@/components/shared/lib/constants/featuredProjectsList";
import { Heading } from "@/components/shared/ui/Heading";
import { NotFound } from "@/components/shared/ui/NotFound";
import { Paragraph } from "@/components/shared/ui/Paragraph";
import { ProjectCard } from "@/components/shared/ui/ProjectCard";
import { Section } from "@/components/shared/ui/Section";

export const Featured = () => {
  return (
    <Section>
      <Heading text="My Best Work" />
      <Paragraph text="A handpicked collection of standout projects that reflect my range, creativity, and obsession with quality. From polished interfaces to rock solid systems, these builds represent my proudest contributions, crafted with intention, powered by curiosity, and driven by a love for making things that just work and looks good doing it." />

      <div className="flex flex-wrap justify-center gap-5">
        {featuredProjectsList && featuredProjectsList.length > 0 ? (
          featuredProjectsList.map((project) => (
            <div key={project.id}>
              <ProjectCard
                imageSrc={project.imageSrc}
                imageAltText={project.imageAltText}
                title={project.title}
                href={project.href}
                description={project.description}
              />
            </div>
          ))
        ) : (
          <NotFound text="Featured projects not found!" />
        )}
      </div>
    </Section>
  );
};
