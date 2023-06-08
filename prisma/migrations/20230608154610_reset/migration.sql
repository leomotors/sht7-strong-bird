-- CreateTable
CREATE TABLE "challenge" (
    "challenge_id" TEXT NOT NULL,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ticket" (
    "challenge_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "exposed" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "challenge_challenge_id_key" ON "challenge"("challenge_id");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_code_key" ON "ticket"("code");

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge"("challenge_id") ON DELETE RESTRICT ON UPDATE CASCADE;
