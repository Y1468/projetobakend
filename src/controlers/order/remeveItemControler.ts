import { Request,Response } from "express";
import { RemovItemService } from "../../services/order/removItemService";

class RemoveItemControler{

   async handle(req:Request,res:Response){
    const item_id=req.query.item_id as string
     
    const rItem=new RemovItemService()
    const order=await rItem.execute({

       item_id
    })
     return res.json(order)
   }
}

export {RemoveItemControler}