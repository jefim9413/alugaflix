import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RemoveUserUseCase } from './RemoveUserUseCase'

export class RemoveUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const removeUserUseCase = container.resolve(RemoveUserUseCase)

    const user = await removeUserUseCase.execute(id)

    return response.status(200).json(user)
  }
}
