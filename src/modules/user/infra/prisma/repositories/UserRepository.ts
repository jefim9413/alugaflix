import { Prisma } from '@prisma/client'
import { IUserRepository } from '../../../repositories/IUserRepository'
import { prisma } from '../../../../../database/prisma'

export class UserRepository implements IUserRepository {
  async create(data: Prisma.UserCreateManyInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async remove(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    })

    return user
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findAll() {
    const users = await prisma.user.findMany()

    return users
  }
}
