"use client";

import { JournalsPageHeader } from "@/components/ui/JournalsPageHeader";
import { LabeledIcon } from "@/components/ui/LabeledIcon";
import { Loader } from "@/components/ui/Loader";
import { MainContainer } from "@/components/ui/MainContainer";
import { Paragraph } from "@/components/ui/Paragraph";
import { TechJournalEntriesType } from "@/custom_types/TechJournalEntriesType";
import { readTechJournalEntry } from "@/server_actions/tech_journal_entry/read";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiBookReader, BiErrorCircle, BiLinkAlt } from "react-icons/bi";

export default function JournalEntry() {
  const params = useParams();
  const slug = params.slug as string;

  const [data, setData] = useState<TechJournalEntriesType[]>();

  useEffect(() => {
    const getTechJournalEntries = async () => {
      const response = await readTechJournalEntry({
        requireSlug: true,
        slug,
      });
      setData(response);
    };

    getTechJournalEntries();
  }, [slug]);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <>
          <JournalsPageHeader />

          <MainContainer>
            <div className="p-spacing-default-10px">
              <article className="p-spacing-default-10px border-full-default rounded-default-8px overflow-y-auto">
                {data && data.length > 0 ? (
                  data.map((journalEntry) => (
                    <div
                      key={journalEntry.id}
                      className="p-spacing-default-20px h-fit border-full-default rounded-default-8px block"
                    >
                      <div className="pb-spacing-default-10px border-b-default">
                        <LabeledIcon
                          icon={<BiBookReader />}
                          label={journalEntry.title || "Untitled"}
                        />
                      </div>

                      <div className="mt-spacing-default-10px mb-spacing-default-20px py-spacing-default-10px text-default-opacity-50 list-none break-words whitespace-normal h-[160px] border-b-default">
                        <Paragraph
                          paragraph={
                            journalEntry.summary || "Summary is not available"
                          }
                          isImportant
                        />
                      </div>

                      <div className="mt-spacing-default-20px flex max-[500px]:flex-col items-center max-[500px]:justify-center justify-between gap-spacing-default-20px">
                        <div className="flex items-center gap-spacing-default-6px">
                          <BiLinkAlt />
                          <Link
                            href="/journals"
                            className="underline underline-offset-4 uppercase text-xs font-bold transition-colors hover:text-primary"
                          >
                            Back to journals
                          </Link>
                        </div>

                        <hr className="w-full hidden max-[500px]:block" />

                        <div className="flex flex-col items-end max-[500px]:items-center text-sm">
                          <div>
                            Written by{" "}
                            <Link
                              href={
                                journalEntry.author
                                  ? "https://github.com/reginaldsc02"
                                  : "/"
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="underline hover:text-primary transition-colors"
                            >
                              {journalEntry.author || "Anonymous"}
                            </Link>
                          </div>

                          <div className="text-default-opacity-50">
                            Last updated on{" "}
                            {journalEntry.updated_at
                              ? new Date(
                                  journalEntry.updated_at
                                ).toLocaleDateString()
                              : "Date is not available"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-spacing-default-20px border-full-default rounded-default-8px">
                    <LabeledIcon
                      icon={<BiErrorCircle />}
                      label="Journal entries not found 🤔"
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
