import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { HistoricoAluguelUseCase } from './HistoricoAluguelUseCase'

export class HistoricoAluguelController {
  async handle(request: Request, response: Response) {
    const historicoAluguelUseCase = container.resolve(HistoricoAluguelUseCase)

    const alugueis = await historicoAluguelUseCase.execute(request.user.id)

    return response.status(200).json(alugueis)
  }
}
