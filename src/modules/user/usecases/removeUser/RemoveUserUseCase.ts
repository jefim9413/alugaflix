import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found.')
    }

    const userRemoved = await this.userRepository.remove(id)

    return userRemoved
  }
}
