"use server";

import { prisma } from "@/index";
import slugify from "slugify";

export const createTechJournalEntry = async ({
  title,
  summary,
  createdAt,
}: {
  title: string;
  summary: string;
  createdAt?: Date;
}) => {
  if (!title) throw new Error("title is required!");
  if (!summary) throw new Error("summary is required!");

  if (typeof title !== "string")
    throw new TypeError("title must be of type string!");

  if (typeof summary !== "string")
    throw new TypeError("summary must be of type string!");

  if (createdAt !== undefined) {
    if (!(createdAt instanceof Date) || isNaN(createdAt.getTime())) {
      throw new TypeError("createdAt must be a valid Date object!");
    }
  }

  let useTitleAsSlug = slugify(title, { lower: true, strict: true });

  await prisma.techjournalentry.create({
    data: {
      title: title,
      slug: useTitleAsSlug,
      summary: summary,
      created_at: createdAt,
    },
  });
};
