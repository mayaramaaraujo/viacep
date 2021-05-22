import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { addressRouter } from './routes/AddressRouter';

const app: Express = express();
app.use(cors());
app.use(express.json())

dotenv.config();

app.use("/", addressRouter)

app.listen(process.env.PORT || 3333, () => console.log("Servidor rodando na porta 3333"));