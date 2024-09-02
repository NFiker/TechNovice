-- CreateTable
CREATE TABLE "comments" (
    "com_code" SERIAL NOT NULL,
    "com_content" TEXT NOT NULL,
    "com_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_user_code" INTEGER NOT NULL,
    "topic_code" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("com_code")
);

-- CreateTable
CREATE TABLE "courses" (
    "course_code" SERIAL NOT NULL,
    "course_title" VARCHAR(255) NOT NULL,
    "course_desc" TEXT NOT NULL,
    "course_tags" VARCHAR(20)[],
    "course_content" TEXT NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_user_code" INTEGER NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("course_code")
);

-- CreateTable
CREATE TABLE "topics" (
    "topic_code" SERIAL NOT NULL,
    "topic_title" VARCHAR(255) NOT NULL,
    "topic_tag" VARCHAR(20) NOT NULL,
    "topic_content" TEXT NOT NULL,
    "topic_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_user_code" INTEGER NOT NULL,

    CONSTRAINT "topics_pkey" PRIMARY KEY ("topic_code")
);

-- CreateTable
CREATE TABLE "users" (
    "user_code" SERIAL NOT NULL,
    "nickname" VARCHAR(42) NOT NULL,
    "mail" VARCHAR(42) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "first_name" VARCHAR(42) NOT NULL,
    "last_name" VARCHAR(42) NOT NULL,
    "role_name" VARCHAR(20) NOT NULL DEFAULT 'Utilisateur',

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_code")
);

-- CreateTable
CREATE TABLE "watches" (
    "course_code" INTEGER NOT NULL,
    "author_user_code" INTEGER NOT NULL,
    "start_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "watches_pkey" PRIMARY KEY ("course_code","author_user_code")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_course_title_key" ON "courses"("course_title");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_user_code_fkey" FOREIGN KEY ("author_user_code") REFERENCES "users"("user_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_topic_code_fkey" FOREIGN KEY ("topic_code") REFERENCES "topics"("topic_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_author_user_code_fkey" FOREIGN KEY ("author_user_code") REFERENCES "users"("user_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_author_user_code_fkey" FOREIGN KEY ("author_user_code") REFERENCES "users"("user_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_author_user_code_fkey" FOREIGN KEY ("author_user_code") REFERENCES "users"("user_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "watches" ADD CONSTRAINT "watches_course_code_fkey" FOREIGN KEY ("course_code") REFERENCES "courses"("course_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
