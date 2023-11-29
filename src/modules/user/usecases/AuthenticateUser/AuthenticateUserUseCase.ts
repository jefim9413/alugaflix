import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface UserUseCaseRequest {
  email: string
  password: string
}

interface UserUseCaseRespose {
  user: {
    id: string
    role: string
  }
  token: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: UserUseCaseRequest) {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error('user or password not found')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('user or password not found')
    }

    const token = sign(
      { sub: user.id, role: user.role },
      'ac81a9ff47be796b7f2e4ccad808e14a',
      { expiresIn: '1h' },
    )

    const tokenReturn = {
      user: {
        id: user.id,
        role: user.role,
      },
      token,
    }

    return tokenReturn
  }
}
