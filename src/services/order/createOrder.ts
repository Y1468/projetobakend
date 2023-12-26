import prismaClient from "../../prisma";

interface orderRequest{
  table:number;
  name:string;
}

class CreateOrder{
   async execute({table,name}:orderRequest){
     //Criando order

     const order=await prismaClient.order.create({
      data:{
        table:table,
        name:name
      }
     })

     return order
   }
}

export {CreateOrder}