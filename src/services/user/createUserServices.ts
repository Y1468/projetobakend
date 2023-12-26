//Criando serviço
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
//Cadastro de usuario
interface userRequest{
    name:string;
    email:string;
    password:string;
}
class CreateUserServices{
   async execute({name,email,password}:userRequest){
    
   //Verificar se o email existe
   if (!email) {
      throw new Error("Email incorreto")
   }

   const useAureadyExists=await prismaClient.user.findFirst({
      where:{
         email:email
      }
   })

   if (useAureadyExists) {
       throw new Error("Esse email ja existe")
   }

   const passwordHash=await hash(password,8)

   const user=await prismaClient.user.create({
      data:{
         name:name,
         email:email,
         password:passwordHash
      },
      //Devolvendo dados
      select:{
        id:true,
        name:true,
        email:true
        
      }
   })
    
      return user
   }
}

export {CreateUserServices}