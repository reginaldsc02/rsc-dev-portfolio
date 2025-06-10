import Link from "next/link";
import { ButtonType } from "../lib/types/ButtonType";

export const ButtonLink = ({
  text,
  href,
  primary = true,
  ...rest
}: { href: string } & ButtonType & React.ComponentProps<"a">) => {
  return (
    <Link
      href={href}
      className={`p-5 lowercase block rounded-full border text-gray-50 disabled:pointer-events-none disabled:opacity-50 ${
        primary
          ? "border-transparent bg-primary hover:text-gray-950 dark:hover:text-gray-50 hover:bg-transparent hover:border-primary"
          : "border-primary bg-transparent text-gray-950 dark:text-gray-50 dark:hover:text-gray-50 hover:text-gray-50 hover:bg-primary hover:border-transparent"
      } transition-colors`}
      {...rest}
    >
      {text}
    </Link>
  );
};
