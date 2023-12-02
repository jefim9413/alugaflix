import { container } from 'tsyringe'
import { IUserRepository } from '../../modules/user/repositories/IUserRepository'
import { UserRepository } from '../../modules/user/infra/prisma/repositories/UserRepository'
import { IFilmeRepository } from '../../modules/filme/repositories/IFilmeRepository'
import { FilmeRepository } from '../../modules/filme/infra/prisma/repositories/FilmeRepository'
import { IAluguelRepository } from '../../modules/aluguel/repositories/IAluguelRepository'
import { AluguelRepository } from '../../modules/aluguel/infra/prisma/repositories/AluguelRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<IFilmeRepository>(
  'FilmeRepository',
  FilmeRepository,
)

container.registerSingleton<IAluguelRepository>(
  'AluguelRepository',
  AluguelRepository,
)
