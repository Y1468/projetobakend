import prismaClient from "../../prisma";

interface ProduteRequest{
  name:string
  price:string
  description:string
  banner:string
  category_id:string
}
class CreateProdutes{
   async execute({name,price,description,banner,category_id}:ProduteRequest){

      const produt=await prismaClient.product.create({
         data:{
            name:name,
            price:price,
            description:description,
            baner:banner,
            category_id:category_id
         }
      })
      return produt
   }
}

export {CreateProdutes}