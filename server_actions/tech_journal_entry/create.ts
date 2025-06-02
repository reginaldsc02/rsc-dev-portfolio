"use server";

import { prisma } from "@/index";
import slugify from "slugify";

export const createTechJournalEntry = async ({
  title,
  summary,
  author,
  featured,
  createdAt,
  updatedAt,
}: {
  title: string;
  summary: string;
  author: string;
  featured?: boolean;
  createdAt?: Date;
  updatedAt: Date;
}) => {
  if (!title) throw new Error("title is required!");
  if (!summary) throw new Error("summary is required!");
  if (!author) throw new Error("author is required!");
  if (!updatedAt) throw new Error("updatedAt date is required!");

  if (typeof title !== "string")
    throw new TypeError("title must be of type string!");

  if (typeof summary !== "string")
    throw new TypeError("summary must be of type string!");

  if (typeof author !== "string")
    throw new TypeError("author must be of type string!");

  if (featured !== undefined && typeof featured !== "boolean") {
    throw new TypeError("featured must be of type boolean!");
  }

  if (createdAt !== undefined) {
    if (!(createdAt instanceof Date) || isNaN(createdAt.getTime())) {
      throw new TypeError("createdAt must be a valid Date object!");
    }
  }

  if (!(updatedAt instanceof Date) || isNaN(updatedAt.getTime())) {
    throw new TypeError("updatedAt must be a valid Date object!");
  }

  let useTitleAsSlug = slugify(title, { lower: true, strict: true });

  await prisma.techjournalentry.create({
    data: {
      title: title,
      summary: summary,
      author: author,
      featured: featured,
      created_at: createdAt,
      updated_at: updatedAt,
      slug: useTitleAsSlug,
    },
  });
};
