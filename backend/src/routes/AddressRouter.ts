import express from 'express';
import { addressController } from '../controller/AddressController';

export const addressRouter = express.Router();

addressRouter.get("/address/:cep", addressController.create)