import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { container } from 'tsyringe'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const user = await authenticateUserUseCase.execute({
      email,
      password,
    })

    return response.status(200).json(user)
  }
}
