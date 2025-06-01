/*
  Warnings:

  - Added the required column `author` to the `techjournalentry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `techjournalentry` ADD COLUMN `author` VARCHAR(255) NOT NULL,
    ADD COLUMN `featured` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `slug` VARCHAR(255) NULL;
