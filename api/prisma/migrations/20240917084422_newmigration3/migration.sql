/*
  Warnings:

  - The primary key for the `watches` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author_user_id` on the `watches` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `watches` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "watches" DROP CONSTRAINT "watches_author_user_id_fkey";

-- AlterTable
ALTER TABLE "watches" DROP CONSTRAINT "watches_pkey",
DROP COLUMN "author_user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "watches_pkey" PRIMARY KEY ("course_id", "user_id");

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;
