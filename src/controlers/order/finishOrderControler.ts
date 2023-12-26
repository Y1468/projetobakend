import { Request,Response } from "express";
import { FinishOrderService } from "../../services/order/finishOrderService";

class FinishOrderContoler{
   async handle(req:Request,res:Response){
      const {order_id}=req.body

      const finish=new FinishOrderService()
      const order=await finish.execute({
        order_id
      })

      return res.json(order)
   }
}

export {FinishOrderContoler}