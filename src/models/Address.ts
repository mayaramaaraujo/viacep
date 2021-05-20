export class Address {
  constructor(
    private id: string,
    private cep: number,
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

  public getCep(): number {
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