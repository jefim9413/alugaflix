import { Router } from 'express'
import { AuthenticateUserController } from '../../../modules/user/usecases/AuthenticateUser/AuthenticateUserController'

export const authenticateRouter = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRouter.post('/sessions', authenticateUserController.handle)
