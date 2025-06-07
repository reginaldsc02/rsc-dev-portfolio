import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Subheading } from "./Subheading";
import { Paragraph } from "./Paragraph";

type ProjectCardType = {
  imageSrc: string;
  imageAltText: string;
  title: string;
  href: string;
  description: string;
};

export const ProjectCard = ({
  imageSrc,
  imageAltText,
  title,
  href,
  description,
}: ProjectCardType) => {
  return (
    <div className="max-w-[28rem] border border-gray-950/10 dark:border-gray-50/10 rounded-lg">
      <div className="w-full aspect-video relative">
        <Image
          src={imageSrc}
          alt={imageAltText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top rounded-t-lg"
        />
      </div>

      <div className="px-2.5 py-5 flex flex-col items-center gap-5">
        <Subheading text={title} />
        <Paragraph text={description.substring(0, 100).concat("...")} />
        <ButtonLink text="View Source Code" href={href} />
      </div>
    </div>
  );
};
