import { FaBriefcase } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { backendProjectsList } from "@/data/backendProjectsList";
import { Paragraph } from "./Paragraph";
import { SectionHeader } from "./SectionHeader";
import { SectionParagraph } from "./SectionParagraph";

export const BackendProjects = () => {
  return (
    <>
      <div className="p-5 border-full-default rounded-lg">
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
      </div>

      <div className="grid xl:grid-cols-3 gap-2.5">
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
      </div>
    </>
  );
};
