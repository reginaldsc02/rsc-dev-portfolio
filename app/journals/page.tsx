"use client";

import { JournalsPageHeader } from "@/components/ui/JournalsPageHeader";
import { LabeledIcon } from "@/components/ui/LabeledIcon";
import { Loader } from "@/components/ui/Loader";
import { MainContainer } from "@/components/ui/MainContainer";
import { TechJournalEntriesType } from "@/custom_types/TechJournalEntriesType";
import { readTechJournalEntry } from "@/server_actions/tech_journal_entry/read";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiBookReader, BiErrorCircle, BiLinkAlt } from "react-icons/bi";

export default function JournalEntries() {
  const [data, setData] = useState<TechJournalEntriesType[]>();

  useEffect(() => {
    const getTechJournalEntries = async () => {
      const response = await readTechJournalEntry({
        requireSlug: false,
      });
      setData(response);
    };

    getTechJournalEntries();
  }, []);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <>
          <JournalsPageHeader />

          <MainContainer>
            <div className="max-h-screen p-spacing-default-10px overflow-y-auto">
              <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-spacing-default-10px p-spacing-default-10px border-full-default rounded-default-8px overflow-y-auto">
                {data && data.length > 0 ? (
                  data.map((journalEntry) => (
                    <div
                      key={journalEntry.id}
                      className="p-spacing-default-20px h-fit border-full-default rounded-default-8px block"
                    >
                      <div className="pb-spacing-default-10px border-b-default">
                        <LabeledIcon
                          icon={<BiBookReader />}
                          label={
                            journalEntry.title.length > 30
                              ? journalEntry.title
                                  .substring(0, 30)
                                  .concat("...")
                              : journalEntry.title || "Untitled"
                          }
                        />
                      </div>

                      <p className="mt-spacing-default-10px mb-spacing-default-20px py-spacing-default-10px text-default-opacity-50 list-none break-words whitespace-normal h-[160px] border-b-default">
                        {journalEntry.summary.length > 100
                          ? journalEntry.summary.substring(0, 100).concat("...")
                          : journalEntry.summary || "Summary is not available"}
                      </p>

                      <div className="mt-spacing-default-20px flex items-center gap-spacing-default-6px">
                        <BiLinkAlt />
                        <Link
                          href={`/journals/entry/${encodeURIComponent(
                            journalEntry.slug as string
                          )}`}
                          className="underline underline-offset-4 uppercase text-xs font-bold transition-colors hover:text-primary"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-spacing-default-20px border-full-default rounded-default-8px">
                    <LabeledIcon
                      icon={<BiErrorCircle />}
                      label="Journal entries cannot found 🤔"
                    />
                  </div>
                )}
              </article>
            </div>
          </MainContainer>
        </>
      )}
    </>
  );
}
