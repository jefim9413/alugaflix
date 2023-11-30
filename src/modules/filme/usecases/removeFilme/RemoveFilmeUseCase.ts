import { inject, injectable } from 'tsyringe'
import { IFilmeRepository } from '../../repositories/IFilmeRepository'

@injectable()
export class RemoveFilmeUseCase {
  constructor(
    @inject('FilmeRepository')
    private filmeRepository: IFilmeRepository,
  ) {}

  async execute(id: string) {
    const filme = await this.filmeRepository.findById(id)

    if (!filme) {
      throw new Error('Filme not found')
    }

    const deletedFilme = await this.filmeRepository.remove(id)

    return deletedFilme
  }
}
