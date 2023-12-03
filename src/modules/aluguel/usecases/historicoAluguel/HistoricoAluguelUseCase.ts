import { inject, injectable } from 'tsyringe'
import { IAluguelRepository } from '../../repositories/IAluguelRepository'

@injectable()
export class HistoricoAluguelUseCase {
  constructor(
    @inject('AluguelRepository')
    private aluguelRepository: IAluguelRepository,
  ) {}

  async execute(id: string) {
    const alugueis = await this.aluguelRepository.findByUserId(id)

    return alugueis
  }
}
