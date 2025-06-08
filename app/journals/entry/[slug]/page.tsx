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
              <div className="p-5 grid gap-5 border border-gray-950/10 dark:border-gray-50/10 rounded-lg">
                <div className="pb-2.5 font-bold capitalize text-xl text-center border-b border-gray-950/10 dark:border-gray-50/10">
                  {journalEntry.title}
                </div>
                <Paragraph text={journalEntry.summary} />

                <Link
                  href="/journals"
                  className="text-center font-black text-sm uppercase underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Back to journals
                </Link>
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
