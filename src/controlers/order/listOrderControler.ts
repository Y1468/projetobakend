import { Request,Response } from "express";
import { ListOrderService } from "../../services/order/listOrderService";

class ListOrderControler{

   async handle(req:Request,res:Response){

      const listOrder=new ListOrderService()
      const orders= await listOrder.execute()

      return res.json(orders)
      
   }
}

export {ListOrderControler}