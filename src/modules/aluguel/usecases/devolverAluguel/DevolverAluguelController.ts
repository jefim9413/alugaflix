import { Request, Response } from 'express'
import { DevolverAluguelUseCase } from './DevolverAluguelUseCase'
import { container } from 'tsyringe'

export class DevolverAluguelController {
  async handle(request: Request, response: Response) {
    const id = request.params.id

    const devolverAluguelUseCase = container.resolve(DevolverAluguelUseCase)

    const aluguel = await devolverAluguelUseCase.execute(id)

    return response.status(200).json(aluguel)
  }
}
