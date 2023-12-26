import { Request,Response } from "express";
import { CreateCategory } from "../../services/categores/createCategory";

class CreateCategoryControler{

   async handle(req:Request,res:Response){
    const {name}=req.body
       
    const createCategore=new CreateCategory()

    const category=await createCategore.execute({
        name
    })
    return res.json(category)
   }
}

export {CreateCategoryControler}