import { prisma } from '../../../../database/prisma'
interface FilmeUseCaseRequest {
  titulo: string
  descricao: string
  ano_lancamento: number
  genero: string
  diretor: string
  disponivel: boolean
}
export class CreateFilmeUseCase {
  async execute({
    titulo,
    descricao,
    ano_lancamento,
    genero,
    diretor,
    disponivel,
  }: FilmeUseCaseRequest) {
    const tituloExists = await prisma.filme.findFirst({
      where: {
        titulo,
      },
    })

    if (tituloExists) {
      throw new Error('Filme ja existe')
    }

    const filme = await prisma.filme.create({
      data: {
        titulo,
        descricao,
        ano_lancamento,
        genero,
        diretor,
        disponivel,
      },
    })

    return filme
  }
}
