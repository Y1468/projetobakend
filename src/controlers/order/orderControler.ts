import { Request,Response } from "express";
import { CreateOrder } from "../../services/order/createOrder";

class OrderControler{

  async handle(req:Request,res:Response){
    const {table,name}=req.body

    const OrderControler=new CreateOrder()

    const order=await OrderControler.execute({
        table,
        name
    })
     return res.json(order)
  }
}

export {OrderControler}

