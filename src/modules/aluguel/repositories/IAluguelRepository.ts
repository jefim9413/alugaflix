import { Aluguel, Prisma } from '@prisma/client'

export interface IAluguelRepository {
  create(data: Prisma.AluguelCreateManyInput): Promise<Aluguel>
  remove(id: string): Promise<Aluguel>
  update(id: string, data: Prisma.AluguelUpdateInput): Promise<Aluguel>
  findById(id: string): Promise<Aluguel | null>
  findByUserId(id: string): Promise<Aluguel[]>
  findAll(): Promise<Aluguel[]>
}
