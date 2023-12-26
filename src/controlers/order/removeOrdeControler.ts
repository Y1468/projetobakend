import { Request,Response } from "express";
import { RemoveOrde } from "../../services/order/removeOrder";

class RemoveOrdeControler{
    //Deletando ordem
   async handle(req:Request,res:Response){
    const order_id=req.query.order_id as string

    const removeOrdeControler=new RemoveOrde()
    const remove=await removeOrdeControler.execute({
        order_id
    })

    return res.json(remove)
   }
}

export {RemoveOrdeControler}
