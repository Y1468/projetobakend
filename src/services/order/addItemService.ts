import prismaClient from "../../prisma";

interface AddRequest{
  order_id:string;
  product_id:string;
  amount:number
}

class AddItemSevice{
   async execute({order_id,product_id,amount}:AddRequest){
      //Adcionando item
    const order=prismaClient.item.create({
        data:{
           order_id:order_id,
           product_id:product_id,
           amount
        }
    })
    return order
   }
}

export {AddItemSevice}