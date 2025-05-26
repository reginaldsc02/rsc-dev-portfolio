import { FaBriefcase } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { backendProjectsList } from "@/data/backendProjectsList";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { Paragraph } from "./Paragraph";

export const BackendProjects = () => {
  return (
    <>
      <div className="my-5 flex justify-between gap-10 text-balance border-full-default rounded-lg">
        <div className="p-5">
          <Title icon={<FaBriefcase />} title="Engine Room Highlights" />
          <Subtitle subtitle="Featured Projects" />
          <Paragraph
            paragraph="A collection of robust backend microservices and management systems
            that power smooth, scalable, and efficient digital experiences
            behind the scenes. From notification management to file uploads and
            content handling, these projects showcase my knack for building
            solid foundations that keep everything running like clockwork - no
            drama, just dependable code doing its thing."
          />
        </div>

        <div
          role="img"
          className="hidden xl:block w-[1300px] min-h-40 bg-[url('/images/projects/ai-gen-background-projects.png')] bg-center bg-cover bg-no-repeat rounded-tr-lg rounded-br-lg filter saturate-200"
        ></div>
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
