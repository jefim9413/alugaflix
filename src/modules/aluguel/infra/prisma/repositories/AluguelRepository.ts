import { Prisma } from '@prisma/client'
import { IAluguelRepository } from '../../../repositories/IAluguelRepository'
import { prisma } from '../../../../../database/prisma'

export class AluguelRepository implements IAluguelRepository {
  async create(data: Prisma.AluguelCreateManyInput) {
    const aluguel = await prisma.aluguel.create({
      data,
    })

    return aluguel
  }

  async remove(id: string) {
    const aluguel = await prisma.aluguel.delete({
      where: {
        id,
      },
    })

    return aluguel
  }

  async update(id: string, data: Prisma.AluguelUpdateInput) {
    const aluguel = await prisma.aluguel.update({
      where: {
        id,
      },
      data,
    })

    return aluguel
  }

  async findById(id: string) {
    const aluguel = await prisma.aluguel.findUnique({
      where: {
        id,
      },
    })

    return aluguel
  }

  async findAll() {
    const alugueis = await prisma.aluguel.findMany()

    return alugueis
  }
}
