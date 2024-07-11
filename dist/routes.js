"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
//Rotas da aplicação
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const createUserControler_1 = require("./controlers/user/createUserControler");
const authUserControler_1 = require("./controlers/user/authUserControler");
const dataioUserControler_1 = require("./controlers/user/dataioUserControler");
const isAutenticated_1 = require("./midware/isAutenticated");
const createCategoreControler_1 = require("./controlers/categores/createCategoreControler");
const categoryControler_1 = require("./controlers/categores/categoryControler");
const produtsControler_1 = require("./controlers/products/produtsControler");
const listCategoryBycontroler_1 = require("./controlers/products/listCategoryBycontroler");
const multer_2 = __importDefault(require("./config/multer"));
const orderControler_1 = require("./controlers/order/orderControler");
const removeOrdeControler_1 = require("./controlers/order/removeOrdeControler");
const addItemControler_1 = require("./controlers/order/addItemControler");
const remeveItemControler_1 = require("./controlers/order/remeveItemControler");
const sendOrdeControler_1 = require("./controlers/order/sendOrdeControler");
const listOrderControler_1 = require("./controlers/order/listOrderControler");
const DatailOrderControler_1 = require("./controlers/order/DatailOrderControler");
const finishOrderControler_1 = require("./controlers/order/finishOrderControler");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//Cadastra usuario
router.post("/users", new createUserControler_1.CreateUserControler().handle);
router.post("/session", new authUserControler_1.AuthUserControler().handle);
//Midiware:verifica se o token ta correto
router.get("/me", isAutenticated_1.Autenticated, new dataioUserControler_1.DataioUserControler().handle);
//Rota de categoria
router.post("/categores", isAutenticated_1.Autenticated, new createCategoreControler_1.CreateCategoryControler().handle);
router.get("/list", isAutenticated_1.Autenticated, new categoryControler_1.CategoriControler().handle);
//Rota produlto
router.post("/produts", isAutenticated_1.Autenticated, upload.single("file"), new produtsControler_1.ProdutsControler().handle);
router.get("/categori/produte", isAutenticated_1.Autenticated, new listCategoryBycontroler_1.ListCategoryBycontroler().handle);
//Rota order
router.post("/order", isAutenticated_1.Autenticated, new orderControler_1.OrderControler().handle);
router.delete("/deletaorde", isAutenticated_1.Autenticated, new removeOrdeControler_1.RemoveOrdeControler().handle);
router.post("/additem", isAutenticated_1.Autenticated, new addItemControler_1.AddItemControler().handle);
router.delete("/delItem", isAutenticated_1.Autenticated, new remeveItemControler_1.RemoveItemControler().handle);
router.put("/orde/send", isAutenticated_1.Autenticated, new sendOrdeControler_1.SendOrderControler().handle);
router.get("/orders", isAutenticated_1.Autenticated, new listOrderControler_1.ListOrderControler().handle);
router.get("/order/detail", isAutenticated_1.Autenticated, new DatailOrderControler_1.DatailOrderControler().handle);
router.put("/finish", isAutenticated_1.Autenticated, new finishOrderControler_1.FinishOrderContoler().handle);
