import Link from "next/link";
import { socialMediaLinks } from "@/data/socialMediaLinks";

export const SocialMediaNavigation = () => {
  return (
    <ul className="flex items-center gap-spacing-default-10px">
      {socialMediaLinks?.map((socialMedia) => (
        <li key={socialMedia.id}>
          <Link
            href={socialMedia.link}
            target="_blank"
            rel="noreferrer"
            aria-label={socialMedia.title}
            className="p-spacing-default-10px block border-full-default rounded-full hover:border-primary! transition-all"
          >
            {socialMedia.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
