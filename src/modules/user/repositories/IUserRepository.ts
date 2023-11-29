import { Prisma, User } from '@prisma/client'

export interface IUserRepository {
  create(data: Prisma.UserCreateManyInput): Promise<User>
  remove(id: string): Promise<User>
  update(id: string, data: Prisma.UserUpdateInput): Promise<User>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  findAll(): Promise<User[]>
}
