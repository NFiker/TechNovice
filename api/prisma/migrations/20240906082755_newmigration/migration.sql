-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_author_user_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_author_user_id_fkey";

-- DropForeignKey
ALTER TABLE "topics" DROP CONSTRAINT "topics_author_user_id_fkey";

-- DropForeignKey
ALTER TABLE "watches" DROP CONSTRAINT "watches_author_user_id_fkey";

-- DropForeignKey
ALTER TABLE "watches" DROP CONSTRAINT "watches_course_id_fkey";

-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "author_user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "courses" ALTER COLUMN "author_user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "topics" ALTER COLUMN "author_user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("topic_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE CASCADE ON UPDATE NO ACTION;
