import prismaClient from "../prisma"


class ListUserService {
  async execute() {
    const users = await prismaClient.user.findMany({
      include: {
        course: {
          select: {
            name: true
          }
        }
      }
    })

    return users
  }
}

export { ListUserService }