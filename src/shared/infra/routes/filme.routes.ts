import { Router } from 'express'
import { CreateFilmeController } from '../../../modules/filme/usecases/createFilme/CreateFilmeController'
import { UpdateFilmeController } from '../../../modules/filme/usecases/updateFilme/UpdateFilmeController'
import { ListFilmeController } from '../../../modules/filme/usecases/listFimes/ListFilmeController'
import { RemoveFilmeController } from '../../../modules/filme/usecases/removeFilme/RemoveFilmeController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { isAdmin } from '../middlewares/isAdmin'

export const filmeRouter = Router()

const createFilmeController = new CreateFilmeController()
const updateFilmeController = new UpdateFilmeController()
const listFilmeController = new ListFilmeController()
const removeFilmeController = new RemoveFilmeController()

filmeRouter.post(
  '/',
  ensureAuthenticated,
  isAdmin,
  createFilmeController.handle,
)
filmeRouter.get('/', ensureAuthenticated, listFilmeController.handle)
filmeRouter.patch(
  '/:id',
  ensureAuthenticated,
  isAdmin,
  updateFilmeController.handle,
)
filmeRouter.delete(
  '/:id',
  ensureAuthenticated,
  isAdmin,
  removeFilmeController.handle,
)
