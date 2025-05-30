import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./LinkButton";
import { LabeledIcon } from "./LabeledIcon";
import {
  BiError,
  BiLinkExternal,
  BiLogoGithub,
  BiSolidBriefcase,
} from "react-icons/bi";

type ProjectCardProps = {
  imageSrc: string;
  imageAltText: string;
  title: string;
  link: string;
  repoName: string;
  description: string;
  programmingLanguage: string;
  programmingLanguageIcon?: React.ReactNode;
};

export const ProjectCard = ({
  imageSrc,
  imageAltText,
  title,
  link,
  repoName,
  description,
  programmingLanguage,
  programmingLanguageIcon,
}: ProjectCardProps) => {
  return (
    <div className="group bg-gray-900 rounded-lg">
      <div className="w-full aspect-video relative">
        <Image
          src={imageSrc}
          alt={imageAltText || "Image description not available"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top rounded-t-lg filter group-hover:saturate-200 transition-all duration-200 ease-linear"
        />
      </div>

      <div className="grid gap-spacing-default-20px p-spacing-default-20px">
        <div>
          <div className="text-xl font-bold capitalize">
            <LabeledIcon
              icon={<BiSolidBriefcase />}
              label={title || "Project title"}
            />
          </div>

          <Link
            href={link || "/"}
            target="_blank"
            rel="noreferrer"
            className="lowercase text-default-opacity-50 hover:text-default transition-colors duration-200 ease-linear"
          >
            <LabeledIcon
              icon={<BiLinkExternal />}
              label={repoName || "project-repository-name"}
            />
          </Link>
        </div>

        <p className="lg:max-w-[800px] xl:max-w-[420px] xl:h-[100px] text-gray-50/70">
          {description || "Project description"}
        </p>

        <LinkButton
          icon={<BiLogoGithub />}
          text="View Source Code"
          href={link}
        />

        <div className="flex items-center gap-spacing-default-6px">
          <div
            role="img"
            aria-label={`Project language: ${
              programmingLanguage || "Unknown programming language"
            }`}
            title={`Project language: ${
              programmingLanguage || "Unknown programming language"
            }`}
            className="p-0.5 bg-default rounded-sm"
          >
            <div className="text-2xl text-gray-950">
              {programmingLanguageIcon || <BiError />}
            </div>
          </div>

          <div className="tracking-wide capitalize">
            {programmingLanguage || "Project programming language"}
          </div>
        </div>
      </div>
    </div>
  );
};
