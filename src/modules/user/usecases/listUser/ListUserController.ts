import { container } from 'tsyringe'
import { ListUserUseCase } from './ListUserUseCase'
import { Request, Response } from 'express'

export class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserUseCase = container.resolve(ListUserUseCase)

    const users = await listUserUseCase.execute()

    return response.status(200).json(users)
  }
}
