-- CreateTable
CREATE TABLE "yellow_quiz" (
    "user_id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "current_quiz" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "yellow_quiz_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "yellow_quiz" ADD CONSTRAINT "yellow_quiz_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
