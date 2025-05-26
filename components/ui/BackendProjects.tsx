import { FaBriefcase } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { backendProjectsList } from "@/data/backendProjectsList";
import { Paragraph } from "./Paragraph";
import { SectionHeader } from "./SectionHeader";
import { SectionParagraph } from "./SectionParagraph";
import { ThreeColumnGrid } from "./ThreeColumnGrid";
import { PaddingInner } from "./PaddingInner";
import { BorderControl } from "./BorderControl";

export const BackendProjects = () => {
  return (
    <div className="grid gap-2.5">
      <BorderControl borderFull isRounded>
        <PaddingInner>
          <SectionHeader
            icon={<FaBriefcase />}
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
        </PaddingInner>
      </BorderControl>

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
            />
          </div>
        ))}
      </ThreeColumnGrid>
    </div>
  );
};
