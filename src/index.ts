import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { viaCep } from './services/viacep';
import axios from 'axios';

const app: Express = express();
app.use(cors());
app.use(express.json())

dotenv.config();

app.listen(process.env.PORT || 3333, () => console.log("Servidor rodando na porta 3333"));