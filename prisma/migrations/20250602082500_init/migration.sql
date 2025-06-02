-- CreateTable
CREATE TABLE "techjournalentry" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "summary" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "author" VARCHAR(255) NOT NULL,
    "featured" BOOLEAN DEFAULT false,
    "slug" VARCHAR(255),

    CONSTRAINT "techjournalentry_pkey" PRIMARY KEY ("id")
);
