"use client";

import { Container } from "@/components/shared/ui/Container";
import { Loader } from "@/components/shared/ui/Loader";
import { TechJournalEntriesType } from "@/components/shared/lib/types/TechJournalEntriesType";
import { readTechJournalEntry } from "@/server_actions/tech_journal_entry/read";
import { useEffect, useState } from "react";
import { JournalCard } from "@/components/shared/ui/JournalCard";
import { NotFound } from "@/components/shared/ui/NotFound";

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

  return !data ? (
    <Loader />
  ) : (
    <Container>
      <div className="max-h-screen overflow-y-auto">
        <article
          className={`${
            data.length > 0
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-y-5 overflow-y-scroll"
              : "block"
          }`}
        >
          {data && data.length > 0 ? (
            data.map((journalEntry) => (
              <JournalCard
                key={journalEntry.id}
                title={
                  journalEntry.title.length > 25
                    ? journalEntry.title.substring(0, 25).concat("...")
                    : journalEntry.title
                }
                summary={
                  journalEntry.summary.length > 100
                    ? journalEntry.summary.substring(0, 100).concat("...")
                    : journalEntry.summary
                }
                href={`/journals/entry/${encodeURIComponent(
                  journalEntry.slug as string
                )}`}
              />
            ))
          ) : (
            <NotFound text="Journal entries not found!" />
          )}
        </article>
      </div>
    </Container>
  );
}
