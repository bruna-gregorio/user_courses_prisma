import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateCourseService";


class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name } = request.body

    const createCourseService = new CreateUserService()

    const course = await createCourseService.execute(name)

    return response.json(course)
  }
}

export { CreateUserController }