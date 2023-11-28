-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filme" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ano_lancamento" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL,

    CONSTRAINT "filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluguel" (
    "id" TEXT NOT NULL,
    "data_aluguel" TIMESTAMP(3) NOT NULL,
    "data_devolucao" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "filme_id" TEXT NOT NULL,

    CONSTRAINT "Aluguel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aluguel" ADD CONSTRAINT "Aluguel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluguel" ADD CONSTRAINT "Aluguel_filme_id_fkey" FOREIGN KEY ("filme_id") REFERENCES "filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
