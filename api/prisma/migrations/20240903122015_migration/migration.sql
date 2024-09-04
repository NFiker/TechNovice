-- CreateTable
CREATE TABLE "comments" (
    "com_id" SERIAL NOT NULL,
    "com_content" TEXT NOT NULL,
    "com_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_user_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("com_id")
);

-- CreateTable
CREATE TABLE "courses" (
    "course_id" SERIAL NOT NULL,
    "course_title" VARCHAR(255) NOT NULL,
    "course_desc" TEXT NOT NULL,
    "course_tags" VARCHAR(20)[],
    "course_content" TEXT NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_user_id" INTEGER NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "topics" (
    "topic_id" SERIAL NOT NULL,
    "topic_title" VARCHAR(255) NOT NULL,
    "topic_tag" VARCHAR(20) [] NOT NULL,
    "topic_content" TEXT NOT NULL,
    "topic_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_user_id" INTEGER NOT NULL,

    CONSTRAINT "topics_pkey" PRIMARY KEY ("topic_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "nickname" VARCHAR(42) NOT NULL,
    "mail" VARCHAR(42) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "first_name" VARCHAR(42) NOT NULL,
    "last_name" VARCHAR(42) NOT NULL,
    "role_name" VARCHAR(20) NOT NULL DEFAULT 'Utilisateur',

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "watches" (
    "course_id" INTEGER NOT NULL,
    "author_user_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "watches_pkey" PRIMARY KEY ("course_id","author_user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_course_title_key" ON "courses"("course_title");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("topic_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
