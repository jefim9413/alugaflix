import { inject, injectable } from 'tsyringe'
import { IAluguelRepository } from '../../repositories/IAluguelRepository'
import { IFilmeRepository } from '../../../filme/repositories/IFilmeRepository'

@injectable()
export class DevolverAluguelUseCase {
  constructor(
    @inject('AluguelRepository')
    @inject('FilmeRepository')
    private filmeRepository: IFilmeRepository,
    private aluguelRepository: IAluguelRepository,
  ) {}

  async execute(id: string) {
    const aluguel = await this.aluguelRepository.findById(id)

    if (!aluguel) {
      throw new Error('Aluguel não encontrado')
    }
    await this.filmeRepository.update(aluguel.filme_id, {
      disponivel: true,
    })

    const aluguel_devolvido = await this.aluguelRepository.update(id, {
      data_devolucao: new Date(),
      status: 'devolvido',
    })

    return aluguel_devolvido
  }
}
