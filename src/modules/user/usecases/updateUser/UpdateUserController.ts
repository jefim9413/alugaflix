import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserUseCase } from './UpdateUserUseCase'

interface UpdateUserDTO {
  nome?: string
  email?: string
  password?: string
}

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { nome, email, password }: UpdateUserDTO = request.body

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    const user = await updateUserUseCase.execute(id, {
      nome,
      email,
      password,
    })

    return response.status(200).json(user)
  }
}
