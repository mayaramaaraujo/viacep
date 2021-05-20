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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
dotenv_1.default.config();
app.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield axios_1.default.get(`viacep.com.br/ws/74356040/json`);
        res.send(resp.data);
    }
    catch (error) {
        res.send(error);
    }
}));
app.listen(process.env.PORT || 3333, () => console.log("Servidor rodando na porta 3333"));
//# sourceMappingURL=index.js.map