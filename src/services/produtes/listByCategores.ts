import prismaClient from "../../prisma";

interface ProduteByRequest{
   category_id:string
}
class ListByCategory{
   async execute({category_id}:ProduteByRequest){
      //Listando produlto
    const findCategory=await prismaClient.product.findMany({

        where:{
           category_id:category_id
        }
    })
    return findCategory
   }
}

export {ListByCategory}