import { FaBriefcase } from "react-icons/fa";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-16 p-2.5 border-t-[1px] border-solid border-t-gray-50/10"
    >
      <div className="my-5 p-5 text-balance border-[1px] border-solid border-gray-50/10 rounded-lg">
        <div className="mb-2.5 flex items-center gap-1.5 capitalize text-4xl font-bold">
          <span>
            <FaBriefcase />
          </span>

          <div className="flex items-center gap-2.5">
            <span className="font-medium">Engine Room Highlights</span>
            <span className="text-sm font-black uppercase">
              Featured Projects
            </span>
          </div>
        </div>

        <p className="w-[700px] tracking-wide leading-5 text-gray-50/50">
          A collection of robust backend microservices and management systems
          that power smooth, scalable, and efficient digital experiences behind
          the scenes. From notification management to file uploads and content
          handling, these projects showcase my knack for building solid
          foundations that keep everything running like clockwork - no drama,
          just dependable code doing its thing.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <ProjectCard
          projectImageSrc={"/images/projects/ai-gen-bms.png"}
          projectImageAltText={"Blog Management System"}
          projectTitle={"Blog Management System"}
          projectLink={"https://github.com/reginaldsc02/bms-backend-mongodb"}
          projectRepoName={"bms-backend-mongodb"}
          projectDescription={
            "This project is a fully-featured Blog Management System (BMS) backend built with Node.js, Express, MongoDB, and Redis."
          }
          primaryProgrammingLanguageUsed={"JavaScript"}
        />

        <ProjectCard
          projectImageSrc={"/images/projects/ai-gen-nms.png"}
          projectImageAltText={"Notification Management System Microservice"}
          projectTitle={"Notification Management System Microservice"}
          projectLink={"https://github.com/reginaldsc02/nms-microservice"}
          projectRepoName={"nms-microservice"}
          projectDescription={
            "This project is a comprehensive Notification Management System (NMS) backend built with Node.js, Express, Redis, KafkaJS, Bull and JavaScript."
          }
          primaryProgrammingLanguageUsed={"JavaScript"}
        />

        <ProjectCard
          projectImageSrc={"/images/projects/ai-gen-fum.png"}
          projectImageAltText={"File Upload Microservice"}
          projectTitle={"File Upload Microservice"}
          projectLink={
            "https://github.com/reginaldsc02/file-upload-microservice"
          }
          projectRepoName={"file-upload-microservice"}
          projectDescription={
            "This project is a robust File Upload Microservice backend built with Node.js, Express, Redis, Bull, and Firebase."
          }
          primaryProgrammingLanguageUsed={"JavaScript"}
        />
      </div>
    </section>
  );
};
