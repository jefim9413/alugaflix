/*
  Warnings:

  - You are about to drop the `Aluguel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Aluguel" DROP CONSTRAINT "Aluguel_filme_id_fkey";

-- DropForeignKey
ALTER TABLE "Aluguel" DROP CONSTRAINT "Aluguel_user_id_fkey";

-- DropTable
DROP TABLE "Aluguel";

-- CreateTable
CREATE TABLE "aluguel" (
    "id" TEXT NOT NULL,
    "data_aluguel" TIMESTAMP(3) NOT NULL,
    "data_devolucao" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "filme_id" TEXT NOT NULL,

    CONSTRAINT "aluguel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aluguel" ADD CONSTRAINT "aluguel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluguel" ADD CONSTRAINT "aluguel_filme_id_fkey" FOREIGN KEY ("filme_id") REFERENCES "filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
