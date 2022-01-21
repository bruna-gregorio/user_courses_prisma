import prismaClient from "../prisma"


class DeleteCourseService {
  async execute(id: string) {
    await prismaClient.course.delete({
      where: {
        id: id
      }
    })

    return
  }
}

export { DeleteCourseService }