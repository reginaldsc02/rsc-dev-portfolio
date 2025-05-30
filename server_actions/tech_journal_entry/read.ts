"use server";

import { prisma } from "@/index";

export const readTechJournalEntry = async (slug: string) => {
  const techJournalEntries = await prisma.techjournalentry.findMany({
    where: {
      slug: slug,
    },
  });
  return techJournalEntries;
};
