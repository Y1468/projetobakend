import { Request,Response } from "express";
import { ListCategori } from "../../services/categores/listCategory";

class CategoriControler{
    
   async handle(req:Request,res:Response){
      const categoriService=new ListCategori()

      const category=await categoriService.execute()
      return res.json(category)
   }
}

export {CategoriControler}