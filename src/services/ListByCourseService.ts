import prismaClient from "../prisma"


class ListByCourseService {
  async execute(course_id: string) {
    const filterbyCourse = await prismaClient.user.findMany({
      where: {
        course_id: course_id
      }
    })
    return filterbyCourse
  }
}

export { ListByCourseService }