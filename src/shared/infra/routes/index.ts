import { Router } from 'express'
import { usersRouter } from './user.routes'
import { authenticateRouter } from './authenticate.routes'
import { filmeRouter } from './filme.routes'
import { aluguelRouter } from './aluguel.routes'

export const router = Router()

router.use('/users', usersRouter)
router.use('/filmes', filmeRouter)
router.use('/alguel', aluguelRouter)

router.use(authenticateRouter)
