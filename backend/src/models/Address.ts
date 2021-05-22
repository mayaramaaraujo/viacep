export class Address {
  constructor(
    private id: string,
    private cep: string,
    private logradouro: string,
    private complemento: string,
    private bairro: string,
    private uf: string
  ) {
    this.id = id,
      this.cep = cep,
      this.logradouro = logradouro,
      this.complemento = complemento,
      this.bairro = bairro,
      this.uf = uf
  }

  public getId(): string {
    return this.id
  }

  public getCep(): string {
    return this.cep;
  }

  public getLogradouro(): string {
    return this.logradouro
  }

  public getComplemento(): string {
    return this.complemento
  }

  public getBairro(): string {
    return this.bairro
  }

  public getUf(): string {
    return this.uf
  }

}

export default interface AddressByViaCep {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}