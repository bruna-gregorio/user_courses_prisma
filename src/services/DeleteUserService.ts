import prismaClient from "../prisma"


class DeleteUserService {
  async execute(id: string) {
    const userExists = await prismaClient.user.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      throw new Error("User not found!")
    }

    await prismaClient.user.delete({
      where: {
        id: id
      }
    })

    return
  }
}

export { DeleteUserService }