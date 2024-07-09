//projeto backend
import express,{ Request,Response,NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import path from "path";
import { router } from "./routes";

const app=express()
app.use(express.json())
//fazê requisição com qualquer ips
app.use (cors())
app.use(router)

const port=process.env.PORT || 3001

app.use(
    "/files",
    express.static(path.resolve(__dirname,"..","tmp"))
)

//@types/express -D
//ts-node-dev -D
//@types/cors -D
//typescript -D
//@types/bcriptjs -d
//@types/jsonwebtoken -D
//@types/multer -D



//Lançãndo erros
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{

    if (err instanceof Error) {

        //Se for instancia de error
        return res.status(400).json({
            error:err.message
        })
    }
    //Se não for erro
    return res.status(500).json({
        status:'error',
        message:'internal server error.'
    })
})

//porta backend
app.listen(3333,()=>console.log('servidor online'))