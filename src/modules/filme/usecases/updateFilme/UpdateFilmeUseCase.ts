import { inject, injectable } from 'tsyringe'
import { IFilmeRepository } from '../../repositories/IFilmeRepository'
import { Prisma } from '@prisma/client'

@injectable()
export class UpdateFilmeUseCase {
  constructor(
    @inject('FilmeRepository')
    private filmeRepository: IFilmeRepository,
  ) {}

  async execute(id: string, data: Prisma.FilmeUpdateInput) {
    const filme = await this.filmeRepository.findById(id)

    if (!filme) {
      throw new Error('Filme not found')
    }

    const updatedFilme = await this.filmeRepository.update(id, data)

    return updatedFilme
  }
}
