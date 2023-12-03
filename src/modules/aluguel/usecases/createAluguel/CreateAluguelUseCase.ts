import { inject, injectable } from 'tsyringe'
import { IAluguelRepository } from '../../repositories/IAluguelRepository'
import { IFilmeRepository } from '../../../filme/repositories/IFilmeRepository'

@injectable()
export class CreateAluguelUseCase {
  constructor(
    @inject('AluguelRepository')
    @inject('FilmeRepository')
    private filmeRepository: IFilmeRepository,
    private aluguelRepository: IAluguelRepository,
  ) {}

  async execute(user_id: string, filme_id: string) {
    const filme = await this.filmeRepository.findById(filme_id)

    if (!filme) {
      throw new Error('Filme não encontrado')
    }

    if (!filme.disponivel) {
      throw new Error('Filme pendente')
    }

    await this.filmeRepository.update(filme_id, {
      disponivel: false,
    })
    const data_aluguel = new Date()
    const data_devolucao = new Date(
      data_aluguel.setDate(data_aluguel.getDate() + 7),
    )

    const aluguel = await this.aluguelRepository.create({
      data_aluguel,
      data_devolucao,
      status: 'pendente',
      user_id,
      filme_id,
    })

    return aluguel
  }
}
