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
exports.RemoveOrdeControler = void 0;
const removeOrder_1 = require("../../services/order/removeOrder");
class RemoveOrdeControler {
    //Deletando ordem
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const order_id = req.query.order_id;
            const removeOrdeControler = new removeOrder_1.RemoveOrde();
            const remove = yield removeOrdeControler.execute({
                order_id
            });
            return res.json(remove);
        });
    }
}
exports.RemoveOrdeControler = RemoveOrdeControler;
