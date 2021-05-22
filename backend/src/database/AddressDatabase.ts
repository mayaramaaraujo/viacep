import { Address } from '../models/Address';
import BaseDatabase from './BaseDatabase';

export class AddressDatabase extends BaseDatabase {
  public async create(address: Address) {
    try {
      await this.connection()
        .insert({
          id: address.getId(),
          cep: address.getCep(),
          logradouro: address.getLogradouro(),
          complemento: address.getComplemento(),
          bairro: address.getBairro(),
          uf: address.getUf()
        })
        .into(this.tableName.address)
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }

  public async search(cep: string) {
    try {
      const address = await this.connection()
      .select()
      .from(this.tableName.address)
      .where('cep', cep)

      return address
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}

export const addressDatabase: AddressDatabase = new AddressDatabase();