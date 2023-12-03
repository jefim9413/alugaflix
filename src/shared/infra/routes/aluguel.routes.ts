import { Router } from 'express'
import { router } from '.'
import { CreateAluguelController } from '../../../modules/aluguel/usecases/createAluguel/CreateAluguelController'
import { DevolverAluguelController } from '../../../modules/aluguel/usecases/devolverAluguel/DevolverAluguelController'
import { HistoricoAluguelController } from '../../../modules/aluguel/usecases/historicoAluguel/HistoricoAluguelController'

export const aluguelRouter = Router()

const createAlguelController = new CreateAluguelController()
const devolverAluguelController = new DevolverAluguelController()
const historicoAluguelController = new HistoricoAluguelController()

aluguelRouter.post('/', createAlguelController.handle)
aluguelRouter.put('/:id', devolverAluguelController.handle)
aluguelRouter.get('/', historicoAluguelController.handle)
