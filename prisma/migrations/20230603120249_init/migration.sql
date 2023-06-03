-- CreateTable
CREATE TABLE "ticket" (
    "game_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "exposed" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "ticket_game_id_key" ON "ticket"("game_id");
