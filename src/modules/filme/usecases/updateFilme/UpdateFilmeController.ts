import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateFilmeUseCase } from './UpdateFilmeUseCase'

interface UpdateUserDTO {
  titulo?: string
  descricao?: string
  ano_lancamento?: number
  genero?: string
  diretor?: string
  disponivel?: boolean
}

export class UpdateFilmeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const {
      titulo,
      descricao,
      ano_lancamento,
      genero,
      diretor,
      disponivel,
    }: UpdateUserDTO = request.body

    const updateFilmeUseCase = container.resolve(UpdateFilmeUseCase)

    const updatedFilme = await updateFilmeUseCase.execute(id, {
      titulo,
      descricao,
      ano_lancamento,
      genero,
      diretor,
      disponivel,
    })

    return response.status(200).json(updatedFilme)
  }
}
