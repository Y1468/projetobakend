import {Request,Response } from "express";
import { CreateProdutes } from "../../services/produtes/createProdutes";
import prismaClient from "../../prisma";

class ProdutsControler{

   async handle(req:Request,res:Response){
      const productService=new CreateProdutes()

      const {name,price,description,category_id}=req.body
      
      if (!req.file) {
         throw new Error("Error upload file");
         
      }else{
         const{originalname,filename:banner}=req.file
          

         const produts=await productService.execute({
            name,
            price,
            description,
            banner,
            category_id
         })

         return res.json(produts)
      }  
   }
}

export {ProdutsControler}