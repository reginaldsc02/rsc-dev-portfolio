"use client";

import { TechJournalEntriesType } from "@/components/shared/lib/types/TechJournalEntriesType";
import { Container } from "@/components/shared/ui/Container";
import { Loader } from "@/components/shared/ui/Loader";
import { NotFound } from "@/components/shared/ui/NotFound";
import { Paragraph } from "@/components/shared/ui/Paragraph";
import { readTechJournalEntry } from "@/server_actions/tech_journal_entry/read";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

  return !data ? (
    <Loader />
  ) : (
    <Container>
      <article className="flex flex-col gap-5">
        {data && data.length > 0 ? (
          data.map((journalEntry) => (
            <div key={journalEntry.id}>
              <div className="mr-5 p-5 grid gap-5 border border-gray-950/10 dark:border-gray-50/10 rounded-lg">
                <div className="pb-2.5 font-bold capitalize text-xl text-center border-b border-gray-950/10 dark:border-gray-50/10">
                  {journalEntry.title}
                </div>
                <Paragraph text={journalEntry.summary} />

                <div className="flex max-[500px]:flex-col items-center max-[500px]:justify-center justify-between gap-5">
                  <Link
                    href="/journals"
                    className="underline underline-offset-4 uppercase text-xs font-bold transition-colors hover:text-primary"
                  >
                    Back to journals
                  </Link>

                  <div className="flex flex-col items-end max-[500px]:items-center text-sm text-gray-950/70 dark:text-gray-50/70">
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
                        ? new Date(journalEntry.updated_at).toLocaleDateString()
                        : "Date is not available"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFound text="Journal entries not found!" />
        )}
      </article>
    </Container>
  );
}
