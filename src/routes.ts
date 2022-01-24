import express from 'express'

import { CreateCourseController } from './controllers/CreateCourseController'
import { ListCourseController } from './controllers/ListCourseController'
import { UpdateCourseController } from './controllers/UpdateCourseController'
import { DeleteCourseController } from './controllers/DeleteCourseController'

import { CreateUserController } from './controllers/CreateUserController'
import { ListUserController } from './controllers/ListUserController'
import { DeleteUserController } from './controllers/DeleteUserController'

const routes = express.Router()

const createCourseController = new CreateCourseController()
const listCourseController = new ListCourseController()
const updateCourseController = new UpdateCourseController()
const deleteCourseController = new DeleteCourseController()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const deleteUserController = new DeleteUserController()

routes.post("/courses", createCourseController.handle)
routes.get("/courses", listCourseController.handle)
routes.put("/courses/:id", updateCourseController.handle)
routes.delete("/courses/:id", deleteCourseController.handle)

routes.post("/users", createUserController.handle)
routes.get("/users", listUserController.handle)
routes.delete("/users/:id", deleteUserController.handle)

export { routes }