import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaGithub, FaLink } from "react-icons/fa";
import { LinkButton } from "./LinkButton";

type ProjectCardProps = {
  projectImageSrc: string;
  projectImageAltText: string;
  projectTitle: string;
  projectLink: string;
  projectRepoName: string;
  projectDescription: string;
  projectProgrammingLanguage: string;
};

export const ProjectCard = ({
  projectImageSrc,
  projectImageAltText,
  projectTitle,
  projectLink,
  projectRepoName,
  projectDescription,
  projectProgrammingLanguage,
}: ProjectCardProps) => {
  return (
    <div className="pb-2 group bg-gray-900 rounded-lg">
      <div className="w-full aspect-video relative">
        <Image
          src={projectImageSrc}
          alt={projectImageAltText || "Alt text is not available"}
          fill
          className="object-cover object-top rounded-t-lg filter group-hover:saturate-200 transition-all duration-200 ease-linear"
        />
      </div>

      <div className="p-5 grid gap-5">
        <div>
          <div className="flex items-center gap-1.5 text-xl font-bold capitalize">
            <FaBriefcase className="max-[375px]:hidden" />
            {projectTitle || "Project Title"}
          </div>

          <Link
            href={projectLink || "/"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 lowercase tracking-tighter font-medium text-gray-50/50 rounded-md"
          >
            <FaLink />

            <div className="hover:text-gray-50 transition-colors duration-200 ease-linear">
              {projectRepoName || "project-repository-name"}
            </div>
          </Link>
        </div>

        <p className="lg:max-w-[800px] xl:max-w-[420px] xl:h-[100px]">
          {projectDescription || "Project Description"}
        </p>

        <LinkButton
          buttonIcon={<FaGithub />}
          buttonText="View Source Code"
          buttonHref={projectLink}
        />

        <div className="flex items-center gap-1.5">
          <div
            role="img"
            aria-label={`Project language: ${
              projectProgrammingLanguage || "unknown"
            }`}
            title={`Project language: ${
              projectProgrammingLanguage || "unknown"
            }`}
            className="w-4 h-4 bg-amber-300 rounded-full"
          ></div>

          <div className="tracking-wide capitalize font-light">
            {projectProgrammingLanguage || "Project Programming Language"}
          </div>
        </div>
      </div>
    </div>
  );
};
