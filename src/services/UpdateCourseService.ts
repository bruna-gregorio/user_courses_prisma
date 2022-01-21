import prismaClient from "../prisma"



class UpdateCourseService {
  async execute(id: string, name: string) {
    // const course = await prismaClient.course.findUnique({
    //   where: {
    //     id: id
    //   }
    // })

    // course.name = name ? name : course.name 

    // return course

    const updateCourse = await prismaClient.course.update({
      where: {
        id: id
      },
      data: {
        name: name
      }
    })

    return updateCourse
  }
}

export { UpdateCourseService }