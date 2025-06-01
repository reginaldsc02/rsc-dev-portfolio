"use server";

import { prisma } from "@/index";

export const readTechJournalEntry = async ({
  requireSlug,
  isFeatured,
  slug,
}: {
  requireSlug: boolean;
  isFeatured?: boolean;
  slug?: string;
}) => {
  if (requireSlug && !slug) {
    throw new Error("slug is required");
  }

  if (requireSlug && typeof slug !== "string") {
    throw new TypeError("slug must be of type string");
  }
  if (isFeatured !== undefined && typeof isFeatured !== "boolean") {
    throw new TypeError("isFeatured must be of type boolean");
  }

  const whereClause: any = {};

  if (requireSlug) {
    whereClause.slug = slug;
  }

  if (isFeatured !== undefined) {
    whereClause.featured = isFeatured;
  }

  const techJournalEntries = await prisma.techjournalentry.findMany({
    where: whereClause,
  });

  return techJournalEntries;
};
