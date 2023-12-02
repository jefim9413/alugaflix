import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateAluguelUseCase } from './CreateAluguelUseCase'

export class CreateAluguelController {
  async handle(request: Request, response: Response) {
    const filme_id = request.params.id
    const user_id = request.user.id

    const aluguelUseCase = container.resolve(CreateAluguelUseCase)

    const aluguel = await aluguelUseCase.execute(user_id, filme_id)

    return response.status(201).json(aluguel)
  }
}
