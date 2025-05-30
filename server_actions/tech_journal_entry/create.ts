"use server";

import { prisma } from "@/index";
import slugify from "slugify";

export const createTechJournalEntry = async ({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) => {
  if (!title) throw new Error("title is required!");
  if (!summary) throw new Error("summary is required!");

  let useTitleAsSlug = slugify(title, { lower: true, strict: true });

  await prisma.techjournalentry.create({
    data: {
      title: title,
      summary: summary,
      slug: useTitleAsSlug,
    },
  });
};
