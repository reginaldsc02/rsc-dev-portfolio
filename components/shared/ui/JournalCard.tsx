import Link from "next/link";
import { Paragraph } from "./Paragraph";

export const JournalCard = ({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) => {
  return (
    <div className="mr-5 p-5 grid gap-5 border border-gray-950/10 dark:border-gray-50/10 rounded-lg">
      <div className="pb-2.5 font-bold capitalize text-xl text-center border-b border-gray-950/10 dark:border-gray-50/10">
        {title}
      </div>
      <Paragraph text={summary} />

      <div className="flex items-center justify-center">
        <Link
          href={href}
          className="text-center font-black text-sm uppercase underline underline-offset-4 hover:text-primary transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
