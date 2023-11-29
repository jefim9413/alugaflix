import { Prisma } from '@prisma/client'
import { IFilmeRepository } from '../../../repositories/IFilmeRepository'
import { prisma } from '../../../../../database/prisma'

export class FilmeRepository implements IFilmeRepository {
  async findAll() {
    const filmes = await prisma.filme.findMany()

    return filmes
  }

  async findById(id: string) {
    const filme = await prisma.filme.findUnique({
      where: {
        id,
      },
    })

    return filme
  }

  async create(data: Prisma.FilmeCreateInput) {
    const filme = await prisma.filme.create({
      data,
    })

    return filme
  }

  async update(id: string, data: Prisma.FilmeUpdateInput) {
    const filme = await prisma.filme.update({
      where: {
        id,
      },
      data,
    })

    return filme
  }

  async remove(id: string) {
    const filme = await prisma.filme.delete({
      where: {
        id,
      },
    })

    return filme
  }
}
