import { Router } from 'express'
import { usersRouter } from './user.routes'
import { authenticateRouter } from './authenticate.routes'

export const router = Router()

router.use('/users', usersRouter)

router.use(authenticateRouter)
