import Link from "next/link";
import { Header } from "./Header";

export const HeaderAndLink = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  return (
    <Header>
      <div className="w-full flex items-center justify-end">
        <Link
          href={href || "/"}
          aria-label={`Go to ${title || "home"} page`}
          className="px-2 py-1 capitalize block cursor-pointer border-full-default rounded-full hover:border-primary! transition-all"
        >
          {title || "Home"}
        </Link>
      </div>
    </Header>
  );
};
