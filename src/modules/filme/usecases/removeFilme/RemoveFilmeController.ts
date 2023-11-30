import { Request, Response } from 'express'
import { RemoveFilmeUseCase } from './RemoveFilmeUseCase'
import { container } from 'tsyringe'

export class RemoveFilmeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const removeFilmeUseCase = container.resolve(RemoveFilmeUseCase)

    const filme = await removeFilmeUseCase.execute(id)

    return response.status(200).json(filme)
  }
}
