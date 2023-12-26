import prismaClient from "../../prisma";

interface itemRequest{
    item_id:string
}

class RemovItemService{

  async execute({item_id}:itemRequest){
     //Removendo item
     const order=await prismaClient.item.delete({
        where:{
            id:item_id
        }
     })

     return order
  }
}

export {RemovItemService}