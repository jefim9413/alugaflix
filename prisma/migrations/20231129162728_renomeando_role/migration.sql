/*
  Warnings:

  - You are about to drop the column `rule` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "rule",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
