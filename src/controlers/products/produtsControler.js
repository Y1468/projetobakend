"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutsControler = void 0;
const createProdutes_1 = require("../../services/produtes/createProdutes");
class ProdutsControler {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = new createProdutes_1.CreateProdutes();
            const { name, price, description, category_id } = req.body;
            if (!req.file) {
                throw new Error("Error upload file");
            }
            else {
                const { originalname, filename: banner } = req.file;
                const produts = yield productService.execute({
                    name,
                    price,
                    description,
                    banner,
                    category_id
                });
                return res.json(produts);
            }
        });
    }
}
exports.ProdutsControler = ProdutsControler;
