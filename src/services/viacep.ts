import axios from 'axios';

const BASE_URL = "viacep.com.br/ws"

export class ViaCep {

  public async getAddress(cep: number) {
    try {
      const res = await axios.get(`${BASE_URL}/${cep}/json`)
      return res
    } catch (error) {
      return error
    }
  }

}

export const viaCep: ViaCep = new ViaCep();