import prismaClient from "../prisma"


class CreateCourseService {
  async execute(name: string) {
    const courseExists = await prismaClient.course.findFirst({
      where: {
        name
      }
    })

    if (courseExists) {
      throw new Error("Course already exists!")
    }

    const course = await prismaClient.course.create({ data: { name } })

    return course
  }
}

export { CreateCourseService }