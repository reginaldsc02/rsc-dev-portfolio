-- CreateTable
CREATE TABLE "techjournalentry" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255),
    "summary" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "techjournalentry_pkey" PRIMARY KEY ("id")
);
