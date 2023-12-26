import prismaClient from "../../prisma";

class ListCategori{
   async execute(){

      //Listando categoria                       //Tras tudo que emcontra
      const category=await prismaClient.category.findMany({
        select:{
          id:true,
          name:true
        }
      })
      return category
   }
}

export {ListCategori}