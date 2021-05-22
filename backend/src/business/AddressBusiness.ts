import { addressDatabase } from '../database/AddressDatabase';
import AddressByViaCep, { Address } from '../models/Address';
import { idGenerator } from '../services/IdGenerator';
import { viaCepService } from '../services/ViaCepService';

class AddressBusiness {

  public async create(cep: string) {
    try {
      if(!cep) {
        throw new Error('It is necessary to pass a CEP.')
      }

      if(cep.length > 9 || isNaN(parseInt(cep))) {
        throw new Error("Invalid format")
      }

      const addressByDB = await addressDatabase.search(cep);
      let addresByViaCepService: AddressByViaCep;

      if(!addressByDB[0]) {
        addresByViaCepService = await viaCepService.getAddress(cep);
        
        if(!addresByViaCepService) {
          throw new Error("Cep not found")
        }
        
        const id: string = idGenerator.generate();
        const newAddress = new Address(
          id, 
          addresByViaCepService.cep.replace("-", ""),
          addresByViaCepService.logradouro,
          addresByViaCepService.complemento,
          addresByViaCepService.bairro,
          addresByViaCepService.uf
        )

        await addressDatabase.create(newAddress);
        return await addressDatabase.search(cep);
      } else {
        return addressByDB;
      }
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}

export const addressBusiness: AddressBusiness = new AddressBusiness();
