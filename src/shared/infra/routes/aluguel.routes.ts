import { Router } from 'express'
import { CreateAluguelController } from '../../../modules/aluguel/usecases/createAluguel/CreateAluguelController'
import { DevolverAluguelController } from '../../../modules/aluguel/usecases/devolverAluguel/DevolverAluguelController'
import { HistoricoAluguelController } from '../../../modules/aluguel/usecases/historicoAluguel/HistoricoAluguelController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

export const aluguelRouter = Router()

const createAlguelController = new CreateAluguelController()
const devolverAluguelController = new DevolverAluguelController()
const historicoAluguelController = new HistoricoAluguelController()

aluguelRouter.post('/:id', ensureAuthenticated, createAlguelController.handle)
aluguelRouter.patch(
  '/:id',
  ensureAuthenticated,
  devolverAluguelController.handle,
)
aluguelRouter.get('/', ensureAuthenticated, historicoAluguelController.handle)
