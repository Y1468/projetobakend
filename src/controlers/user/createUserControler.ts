//Criando controller
import { Request,Response, response } from "express";
import { CreateUserServices } from "../../services/user/createUserServices";

class CreateUserControler{

    async handle(req:Request,res:Response){

      const{name,email,password}=req.body
      const createUserServices=new CreateUserServices()

      const user=await createUserServices.execute({
        //Banco de dado
        name,
        email,
        password
      })
      return res.json(user)
    }

}

export {CreateUserControler}