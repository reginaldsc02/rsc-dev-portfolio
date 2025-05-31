import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./LinkButton";
import { LabeledIcon } from "./LabeledIcon";
import { BiLinkExternal } from "react-icons/bi";

type ProjectCardType = {
  imageSrc: string;
  imageAltText: string;
  title: string;
  link: string;
  repoName: string;
  description: string;
};

export const ProjectCard = ({
  imageSrc,
  imageAltText,
  title,
  link,
  repoName,
  description,
}: ProjectCardType) => {
  return (
    <div className="group bg-gray-950 border-full-default rounded-default-8px">
      <div className="w-full aspect-video relative">
        <Image
          src={imageSrc}
          alt={imageAltText || "Image description not available"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top rounded-t-lg filter group-hover:saturate-200 transition-all"
        />
      </div>

      <div className="grid gap-spacing-default-20px p-spacing-default-20px">
        <div>
          <div className="text-xl font-bold capitalize">
            {title || "Project title"}
          </div>

          <Link
            href={link || "/"}
            target="_blank"
            rel="noreferrer"
            className="lowercase text-default-opacity-50 hover:text-default transition-colors"
          >
            <LabeledIcon
              icon={<BiLinkExternal />}
              label={repoName || "project-repository-name"}
            />
          </Link>
        </div>

        <p className="pb-spacing-default-20px border-b-default text-gray-50/70">
          {description.substring(0, 90).concat("...") || "Project description"}
        </p>

        <LinkButton text="View Source Code" href={link} />
      </div>
    </div>
  );
};
