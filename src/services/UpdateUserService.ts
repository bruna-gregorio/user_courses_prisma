import { hash } from "bcryptjs"

import prismaClient from "../prisma"

interface IUserRequest {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
  course_id: string;
}


class UpdateUserService {
  async execute({ id, name, age, email, password, course_id }: IUserRequest) {
    const passwordHash = await hash(password, 8)

    const updateUser = await prismaClient.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        age: age,
        email: email,
        password: passwordHash,
        course_id: course_id
      },
      include: {
        course: true
      }
    })

    return updateUser
  }
}

export { UpdateUserService }