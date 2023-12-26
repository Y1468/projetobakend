import prismaClient from "../../prisma";

interface RemoveRequest{
  order_id:string
}

class RemoveOrde{
  async execute({order_id}:RemoveRequest){
     
    const removeOrde=await prismaClient.order.delete({
        where:{
          id:order_id
        }
    })

    return removeOrde
  }
}

export {RemoveOrde}