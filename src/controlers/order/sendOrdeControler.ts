import { Request,Response } from "express";
import { SendOrderService } from "../../services/order/sendOrdeService";

class SendOrderControler{

  async handle(req:Request,res:Response){
     const {order_id}=req.body

     const sendOrder=new SendOrderService()
     const order=await sendOrder.execute({

        order_id
     })

     return res.json(order)
  }
}

export {SendOrderControler}