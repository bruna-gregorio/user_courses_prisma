import express from 'express'

import { CreateUserController } from './controllers/CreateCourseController'
import { ListCourseController } from './controllers/ListCourseController'
import { UpdateCourseController } from './controllers/UpdateCourseController'
import { DeleteCourseController } from './controllers/DeleteCourseController'

const routes = express.Router()

const createCourseController = new CreateUserController()
const listCourseController = new ListCourseController()
const updateCourseController = new UpdateCourseController()
const deleteCourseController = new DeleteCourseController()

routes.post("/courses", createCourseController.handle)
routes.get("/courses", listCourseController.handle)
routes.put("/courses/:id", updateCourseController.handle)
routes.delete("/courses/:id", deleteCourseController.handle)

export { routes }