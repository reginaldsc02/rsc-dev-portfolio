"use server";

import { prisma } from "@/index";

export const readTechJournalEntry = async ({
  requireSlug,
  slug,
}: {
  requireSlug: boolean;
  slug?: string;
}) => {
  if (requireSlug && !slug) {
    throw new Error("slug is required");
  }

  if (requireSlug && typeof slug !== "string") {
    throw new TypeError("slug must be of type string");
  }

  const whereClause: any = {};

  if (requireSlug) {
    whereClause.slug = slug;
  }

  const techJournalEntries = await prisma.techjournalentry.findMany({
    where: whereClause,
  });

  return techJournalEntries;
};
