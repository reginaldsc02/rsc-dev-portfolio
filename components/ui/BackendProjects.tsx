import { FaBriefcase } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { backendProjectsList } from "@/data/backendProjectsList";

export const BackendProjects = () => {
  return (
    <>
      <div className="my-5 flex justify-between gap-10 text-balance border-full-default rounded-lg">
        <div className="p-5">
          <div className="mb-2.5 flex items-center gap-1.5 capitalize text-3xl md:text-4xl font-bold">
            <FaBriefcase className="hidden md:block" />

            <div className="flex flex-col md:flex-row md:items-center gap-2.5">
              <span className="font-medium">Engine Room Highlights</span>
              <span className="text-sm font-bold uppercase">
                Featured Projects
              </span>
            </div>
          </div>

          <p className="tracking-wide text-gray-50/50">
            A collection of robust backend microservices and management systems
            that power smooth, scalable, and efficient digital experiences
            behind the scenes. From notification management to file uploads and
            content handling, these projects showcase my knack for building
            solid foundations that keep everything running like clockwork - no
            drama, just dependable code doing its thing.
          </p>
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
