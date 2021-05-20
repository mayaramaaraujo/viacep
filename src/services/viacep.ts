import axios from 'axios';

const BASE_URL = "viacep.com.br/ws"

export class ViaCep {

  public async getAddress(cep: number) {
    // axios.get(`${BASE_URL}/${cep}/json`)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    try {
      const res = await axios.get(`${BASE_URL}/${cep}/json`)
      console.log(res)

      return res.data
    } catch (error) {
      console.log(error)
      return error
    }
  }

}

export const viaCep: ViaCep = new ViaCep();