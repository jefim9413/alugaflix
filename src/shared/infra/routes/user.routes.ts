import { Router } from 'express'
import { CreateUserController } from '../../../modules/user/usecases/createUser/CreateUserController'
import { ListUserController } from '../../../modules/user/usecases/listUser/ListUserController'
import { RemoveUserController } from '../../../modules/user/usecases/removeUser/RemoveUserController'
import { UpdateUserController } from '../../../modules/user/usecases/updateUser/UpdateUserController'

export const usersRouter = Router()
const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const removeUserController = new RemoveUserController()
const updateUserController = new UpdateUserController()

usersRouter.post('/', createUserController.handle)
usersRouter.get('/', listUserController.handle)
usersRouter.delete('/:id', removeUserController.handle)
usersRouter.patch('/:id', updateUserController.handle)
