"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function Autenticated(req, res, next) {
    //Recebendo token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        //Validando token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //Recuperando id do token e adcionando na variavel no req
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.Autenticated = Autenticated;
