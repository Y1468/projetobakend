import {NextFunction, Request,Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
  sub:string;
}

export function Autenticated(req:Request,res:Response,next:NextFunction){
  
  //Recebendo token
  const authToken=req.headers.authorization

    if (!authToken) {
      return res.status(401).end()
    }

    const[, token]=authToken.split(" ")
      
    try{
      //Validando token
      const {sub}=verify(
        token,
        process.env.JWT_SECRET
      )as Payload

      //Recuperando id do token e adcionando na variavel no req
       req.user_id=sub
      return next()

    }catch(err){
      return res.status(401).end()
    }
}