import { Request,Response } from "express";
import { DatailOrderService } from "../../services/order/datailOrderService";

class DatailOrderControler{

   async handle(req:Request,res:Response){
      const order_id=req.query.order_id as string

      const datailUserControler=new DatailOrderService()
      const orders= await datailUserControler.execute({

         order_id
      })

      return res.json(orders)
   }
}

export {DatailOrderControler}