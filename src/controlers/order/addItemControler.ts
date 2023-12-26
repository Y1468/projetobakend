import { Request,Response } from "express";
import { AddItemSevice } from "../../services/order/addItemService";


class AddItemControler{
   async handle(req:Request,res:Response){

    const {order_id,product_id,amount}=req.body
    
    const addItem=new AddItemSevice()
    const item=await addItem.execute({

        order_id,
        product_id,
        amount
    })

    return res.json(item)
   }
}

export {AddItemControler}
