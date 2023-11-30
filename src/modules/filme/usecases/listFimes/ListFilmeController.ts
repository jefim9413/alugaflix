import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListFilmeUseCase } from './ListFilmeUseCase'

export class ListFilmeController {
  async handle(request: Request, response: Response) {
    const listFilmeUseCase = container.resolve(ListFilmeUseCase)

    const filmes = await listFilmeUseCase.execute()

    return response.status(200).json(filmes)
  }
}
