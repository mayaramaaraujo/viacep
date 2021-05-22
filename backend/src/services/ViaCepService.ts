import axios from 'axios';

const BASE_URL = "https://viacep.com.br/ws"

export class ViaCepService {

  public async getAddress(cep: string): Promise<any> {
      const result = await axios.get(`${BASE_URL}/${cep}/json`)
      .then(res => res.data)
      .catch(err => err)

      return result;
  }
}

export const viaCepService: ViaCepService = new ViaCepService();