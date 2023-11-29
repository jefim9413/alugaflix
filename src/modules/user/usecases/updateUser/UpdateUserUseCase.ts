import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'
import { Prisma } from '@prisma/client'

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string, data: Prisma.UserUpdateInput) {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found.')
    }

    const userUpdated = await this.userRepository.update(id, data)

    return userUpdated
  }
}
