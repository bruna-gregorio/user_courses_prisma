import { hash } from "bcryptjs";

import prismaClient from "../prisma";

interface IUserRequest {
  name: string,
  age: string,
  email: string,
  password: string,
  course_id: string
}


class CreateUserService {
  async execute({ name, age, email, password, course_id }: IUserRequest) {
    const passwordHash = await hash(password, 8)

    const userExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (userExists) {
      throw new Error("User already exists!")
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        age,
        email,
        password: passwordHash,
        course_id
      },
      include: {
        course: true
      }
    })

    return user
  }
}

export { CreateUserService }