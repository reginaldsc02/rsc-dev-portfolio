import Link from "next/link";
import { socialMediaLinks } from "../lib/constants/socialMediaLinks";

export const SocialMediaLinks = () => {
  return (
    <ul className="hidden md:flex gap-2.5">
      {socialMediaLinks &&
        socialMediaLinks?.map((sml) => (
          <li key={sml.id} className="hover:text-primary transition-colors">
            <Link
              href={sml.href}
              aria-label={sml.title}
              target="_blank"
              rel="noreferrer"
            >
              {sml.icon}
            </Link>
          </li>
        ))}
    </ul>
  );
};
