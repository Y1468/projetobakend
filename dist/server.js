"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//projeto backend
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//fazê requisição com qualquer ips
app.use((0, cors_1.default)());
app.use(routes_1.router);
const port = process.env.PORT || 3333;
app.use("/files", express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp")));
//@types/express -D
//ts-node-dev -D
//@types/cors -D
//typescript -D
//@types/bcriptjs -d
//@types/jsonwebtoken -D
//@types/multer -D
//Lançãndo erros
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        //Se for instancia de error
        return res.status(400).json({
            error: err.message
        });
    }
    //Se não for erro
    return res.status(500).json({
        status: 'error',
        message: 'internal server error.'
    });
});
//porta backend
app.listen(port, () => console.log('servidor online'));
