"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(id, cep, logradouro, complemento, bairro, uf) {
        this.id = id;
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.bairro = bairro;
        this.uf = uf;
        this.id = id,
            this.cep = cep,
            this.logradouro = logradouro,
            this.complemento = complemento,
            this.bairro = bairro,
            this.uf = uf;
    }
    getId() {
        return this.id;
    }
    getCep() {
        return this.cep;
    }
    getLogradouro() {
        return this.logradouro;
    }
    getComplemento() {
        return this.complemento;
    }
    getBairro() {
        return this.bairro;
    }
    getUf() {
        return this.uf;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map