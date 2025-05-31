import { ProjectCard } from "./ProjectCard";
import { backendProjectsList } from "@/data/backendProjectsList";
import { Paragraph } from "./Paragraph";
import { SectionHeader } from "./SectionHeader";
import { SectionParagraph } from "./SectionParagraph";
import { ThreeColumnGrid } from "./ThreeColumnGrid";

export const FeaturedProjects = () => {
  return (
    <div className="grid gap-spacing-default-10px">
      <div className="p-spacing-default-20px border-full-default rounded-default-8px">
        <SectionHeader
          title="Engine Room Highlights"
          subtitle="Featured Projects"
        />

        <SectionParagraph>
          <Paragraph
            paragraph="A collection of robust backend microservices and management systems
            that power smooth, scalable, and efficient digital experiences
            behind the scenes. From notification management to file uploads and
            content handling, these projects showcase my knack for building
            solid foundations that keep everything running like clockwork - no
            drama, just dependable code doing its thing."
          />
        </SectionParagraph>
      </div>

      <ThreeColumnGrid>
        {backendProjectsList.map((project) => (
          <div key={project.id}>
            <ProjectCard
              imageSrc={project.imageSrc}
              imageAltText={project.imageAltText}
              title={project.title}
              link={project.link}
              repoName={project.repoName}
              description={project.description}
              programmingLanguage={project.programmingLanguage}
              programmingLanguageIcon={project.programmingLanguageIcon}
            />
          </div>
        ))}
      </ThreeColumnGrid>
    </div>
  );
};
