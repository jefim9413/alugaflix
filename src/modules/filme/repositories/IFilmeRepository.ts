import { Filme, Prisma } from '@prisma/client'

export interface IFilmeRepository {
  findAll(): Promise<Filme[]>
  findById(id: string): Promise<Filme>
  create(data: Prisma.FilmeCreateInput): Promise<Filme>
  update(id: string, data: Prisma.FilmeUpdateInput): Promise<Filme>
  remove(id: string): Promise<Filme>
}
