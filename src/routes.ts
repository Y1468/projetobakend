//Rotas da aplicação
import multer from "multer";
import { Router,Request,Response } from "express";
import { CreateUserControler } from "./controlers/user/createUserControler";
import { AuthUserControler } from "./controlers/user/authUserControler";
import { DataioUserControler } from "./controlers/user/dataioUserControler";
import {Autenticated} from "./midware/isAutenticated";
import { CreateCategoryControler } from "./controlers/categores/createCategoreControler";
import { CategoriControler } from "./controlers/categores/categoryControler";
import { ProdutsControler } from "./controlers/products/produtsControler";
import { ListCategoryBycontroler } from "./controlers/products/listCategoryBycontroler";
import uploadConfig from "./config/multer";
import { OrderControler } from "./controlers/order/orderControler";
import { RemoveOrdeControler } from "./controlers/order/removeOrdeControler";
import { AddItemControler } from "./controlers/order/addItemControler";
import { RemoveItemControler } from "./controlers/order/remeveItemControler";
import { SendOrderControler } from "./controlers/order/sendOrdeControler";
import { ListOrderControler } from "./controlers/order/listOrderControler";
import { DatailOrderControler } from "./controlers/order/DatailOrderControler";
import { FinishOrderContoler } from "./controlers/order/finishOrderControler";



const router=Router()

const upload=multer(uploadConfig.upload("./tmp"))

//Cadastra usuario
router.post("/users",new CreateUserControler().handle)
router.post("/session",new AuthUserControler().handle)
//Midiware:verifica se o token ta correto
router.get("/me",Autenticated,new DataioUserControler().handle)

//Rota de categoria
router.post("/categores",Autenticated,new CreateCategoryControler().handle)
router.get("/list",Autenticated,new CategoriControler().handle)

//Rota produlto
router.post("/produts",Autenticated,upload.single("file"),new ProdutsControler().handle)
router.get("/categori/produte",Autenticated,new ListCategoryBycontroler().handle)

//Rota order
router.post("/order",Autenticated,new OrderControler().handle)
router.delete("/deletaorde",Autenticated,new RemoveOrdeControler().handle)
router.post("/additem",Autenticated,new AddItemControler().handle)
router.delete("/delItem",Autenticated,new RemoveItemControler().handle)
router.put("/orde/send",Autenticated,new SendOrderControler().handle)
router.get("/orders",Autenticated,new ListOrderControler().handle)
router.get("/order/detail",Autenticated,new DatailOrderControler().handle)
router.put("/finish",Autenticated,new FinishOrderContoler().handle)
export {router}