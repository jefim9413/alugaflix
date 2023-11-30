import { inject, injectable } from 'tsyringe'
import { IFilmeRepository } from '../../repositories/IFilmeRepository'

@injectable()
export class ListFilmeUseCase {
  constructor(
    @inject('FilmeRepository')
    private filmeRepository: IFilmeRepository,
  ) {}

  async execute() {
    const filmes = await this.filmeRepository.findAll()

    return filmes
  }
}
