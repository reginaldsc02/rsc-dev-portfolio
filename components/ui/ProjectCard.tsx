import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./Buttons";
import { FaBriefcase, FaGithub, FaLink } from "react-icons/fa";

type Props = {
  projectImageSrc: string;
  projectImageAltText: string;
  projectTitle: string;
  projectLink: string;
  projectRepoName: string;
  projectDescription: string;
  primaryProgrammingLanguageUsed: string;
};

export const ProjectCard = ({
  projectImageSrc,
  projectImageAltText,
  projectTitle,
  projectLink,
  projectRepoName,
  projectDescription,
  primaryProgrammingLanguageUsed,
}: Props) => {
  return (
    <div className="pb-2 group bg-gray-900 rounded-lg">
      <Image
        src={projectImageSrc}
        alt={projectImageAltText || "Alt text is not available."}
        width={500}
        height={250}
        layout="responsive"
        className="w-full h-1/2 object-center object-cover rounded-t-lg filter group-hover:saturate-200 transition-all duration-200 ease-linear"
      />

      <div className="p-5 grid gap-5">
        <div>
          <div className="flex items-center gap-1.5 text-xl font-bold capitalize">
            <span>
              <FaBriefcase />
            </span>
            <span>{projectTitle || "Project Title"}</span>
          </div>

          <Link
            href={projectLink || "/"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 lowercase tracking-tighter font-medium text-gray-50/50"
          >
            <span>
              <FaLink />
            </span>
            <span className="hover:text-gray-50 transition-colors duration-200 ease-linear">
              {projectRepoName || "project-repository-name"}
            </span>
          </Link>
        </div>

        <p className="tracking-wide font-medium">
          {projectDescription || "Project Description"}
        </p>

        <Link href={projectLink || "/"} target="_blank" rel="noreferrer">
          <PrimaryButton
            buttonIcon={<FaGithub />}
            buttonText="View Source Code"
          />
        </Link>

        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 flex items-center justify-center bg-amber-300 rounded-full"></div>
          <div className="tracking-wide capitalize font-light">
            {primaryProgrammingLanguageUsed ||
              "Primary Programming Language Used"}
          </div>
        </div>
      </div>
    </div>
  );
};
