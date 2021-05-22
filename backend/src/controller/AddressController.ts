import { Request, Response } from 'express';
import { addressBusiness } from '../business/AddressBusiness';

export class AddressController {
  public async create(req: Request, res: Response) {
    try {
      const cep: string = req.params.cep;
      const address = await addressBusiness.create(cep)

      res.status(200).send(address)
    } catch (error) {
      res.status(400).send(error.message || error.sqlMessage)
    }
  }
}

export const addressController: AddressController = new AddressController();