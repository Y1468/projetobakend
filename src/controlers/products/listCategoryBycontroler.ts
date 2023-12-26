import { Request,Response, json } from "express";
import { ListByCategory } from "../../services/produtes/listByCategores";

class ListCategoryBycontroler{

   async handle(req:Request,res:Response){
    const category_id=req.query.category_id as string

    const list=new ListByCategory()
    const prodts=await list.execute({
        category_id
    })

    return res.json(prodts)
      
   }
}

export {ListCategoryBycontroler}