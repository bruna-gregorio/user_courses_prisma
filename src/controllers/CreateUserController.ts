import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, age, email, password, photo, course_id } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, age, email, password, photo, course_id })

    return response.json(user)
  }
}

export { CreateUserController }