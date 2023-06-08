-- CreateTable
CREATE TABLE "ticket" (
    "game_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "exposed" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "yellow_quiz" (
    "user_id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "current_quiz" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "yellow_quiz_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "pieyon" (
    "user_id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "heartbeats" INTEGER NOT NULL DEFAULT 0,
    "last_heartbeat" TIMESTAMP(3) NOT NULL DEFAULT '1970-01-01 00:00:00 +00:00',

    CONSTRAINT "pieyon_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ticket_game_id_key" ON "ticket"("game_id");

-- AddForeignKey
ALTER TABLE "yellow_quiz" ADD CONSTRAINT "yellow_quiz_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pieyon" ADD CONSTRAINT "pieyon_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
