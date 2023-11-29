import { Request, Response } from 'express'
import { CreateFilmeUseCase } from './CreateFilmeUseCase'

export class CreateFilmeController {
  async handle(request: Request, response: Response) {
    const { titulo, descricao, ano_lancamento, genero, diretor, disponivel } =
      request.body
    const createFilmeUseCase = new CreateFilmeUseCase()

    const filme = await createFilmeUseCase.execute({
      titulo,
      descricao,
      ano_lancamento,
      genero,
      diretor,
      disponivel,
    })

    return response.status(201).json(filme)
  }
}
