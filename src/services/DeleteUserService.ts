import prismaClient from "../prisma"



class DeleteUserService {
  async execute(id: string) {
    const userDeleted = await prismaClient.user.delete({
      where: {
        id: id
      }
    })

    return true
  }
}

export { DeleteUserService }