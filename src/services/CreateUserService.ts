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
    const user = await prismaClient.user.create({
      data: {
        name,
        age,
        email,
        password,
        course_id
      }
    })

    return user
  }
}

export { CreateUserService }