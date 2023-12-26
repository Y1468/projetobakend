import prismaClient from "../../prisma";

interface FinishOrderRequest{
  order_id
}

class FinishOrderService{
  async execute({order_id}:FinishOrderRequest){
     //Finalizando pedido
     const order=await prismaClient.order.update({
        where:{
          id:order_id
        },
        data:{
            status:true
        }
     })
     return order
  }
}

export {FinishOrderService}