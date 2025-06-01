import { BiRightArrow } from "react-icons/bi";
import { Header } from "./Header";
import Link from "next/link";
import { readTechJournalEntry } from "@/server_actions/tech_journal_entry/read";
import { useState, useEffect } from "react";
import { TechJournalEntriesType } from "@/custom_types/TechJournalEntriesType";

export const JournalsPageHeader = () => {
  const [data, setData] = useState<TechJournalEntriesType[]>();

  useEffect(() => {
    const getTechJournalEntries = async () => {
      const response = await readTechJournalEntry({
        requireSlug: false,
        isFeatured: true,
      });
      setData(response);
    };

    getTechJournalEntries();
  }, []);

  return (
    <Header>
      <div className="w-full flex items-center justify-between">
        <div className="w-[600px] lg:w-[800px] xl:w-[80%] hidden md:flex">
          <div className="min-w-[160px] capitalize font-semibold text-xs flex items-center gap-spacing-default-6px mr-spacing-default-20px">
            Featured journal entries
            <BiRightArrow />
          </div>

          <ul className="flex overflow-x-auto">
            {data && data.length > 0 ? (
              data.slice(0, 3).map((journalEntry) => (
                <li
                  key={journalEntry.id}
                  className="flex items-center px-2 py-1"
                >
                  <Link
                    href={`/journals/entry/${encodeURIComponent(
                      journalEntry.slug as string
                    )}`}
                    title={journalEntry.title}
                    className="lowercase italic underline underline-offset-4 transition-colors hover:text-primary block text-clip"
                  >
                    {journalEntry.title.length > 10
                      ? journalEntry.title.substring(0, 10).concat("...")
                      : journalEntry.title || "Untitled"}
                  </Link>
                  <div className="ml-spacing-default-10px text-default-opacity-50">
                    /
                  </div>
                </li>
              ))
            ) : (
              <li className="text-default-opacity-50 lowercase">
                No featured journal entries ☹️
              </li>
            )}
          </ul>
        </div>

        <div className="w-full md:w-fit flex items-center justify-end">
          <Link
            href="/"
            aria-label="Go to home page"
            className="px-2 py-1 block cursor-pointer border-full-default rounded-full hover:border-primary! transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </Header>
  );
};
