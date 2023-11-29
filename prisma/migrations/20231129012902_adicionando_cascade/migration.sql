-- DropForeignKey
ALTER TABLE "Aluguel" DROP CONSTRAINT "Aluguel_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Aluguel" ADD CONSTRAINT "Aluguel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
