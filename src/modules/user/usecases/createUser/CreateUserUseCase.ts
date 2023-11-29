import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'
import { hash } from 'bcryptjs'

interface UserUseCaseRequest {
  nome: string
  email: string
  password: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ nome, email, password }: UserUseCaseRequest) {
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }
    const passwordHash = await hash(password, 8)

    const user = await this.userRepository.create({
      nome,
      email,
      password: passwordHash,
    })

    return user
  }
}
