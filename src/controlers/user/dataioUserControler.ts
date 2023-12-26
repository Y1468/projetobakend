import { Request,Response } from "express";
import { DatailUserServer } from "../../services/user/datailUserServer";

class DataioUserControler{

  async handle(req:Request,res:Response){

     const user_id=req.user_id

     const datailUserControler=new DatailUserServer()

     const user=await datailUserControler.execute(user_id)

     return res.json(user)
  }
}

export {DataioUserControler}

