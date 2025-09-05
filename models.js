// phone
export class Telefone {
  constructor(numero, tipo) {
    this.numero = numero;
    this.tipo = tipo;
  }

  getNumeroMaiusculo() {
    return this.numero.toUpperCase();
  }
  getNumeroMinusculo() {
    return this.numero.toLowerCase();
  }
  getTipoMaiusculo() {
    return this.tipo.toUpperCase();
  }
  getTipoMinusculo() {
    return this.tipo.toLowerCase();
  }
}

// address
export class Endereco {
  constructor(rua, numero, cidade) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
  }

  getRuaMaiusculo() {
    return this.rua.toUpperCase();
  }
  getRuaMinusculo() {
    return this.rua.toLowerCase();
  }
  getCidadeMaiusculo() {
    return this.cidade.toUpperCase();
  }
  getCidadeMinusculo() {
    return this.cidade.toLowerCase();
  }
}

// client
export class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.#cpf = cpf;
    this.endereco = endereco;
    this.telefones = [];
  }

  getCpf() {
    return this.#cpf;
  }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  removerTelefone(telefone) {
    this.telefones = this.telefones.filter(t => t !== telefone);
  }

  getNomeMaiusculo() {
    return this.nome.toUpperCase();
  }
  getNomeMinusculo() {
    return this.nome.toLowerCase();
  }
}

// company
export class Empresa {
  #cnpj;
  constructor(nome, cnpj, endereco) {
    this.nome = nome;
    this.#cnpj = cnpj;
    this.endereco = endereco;
    this.telefones = [];
    this.clientes = [];
  }

  getCnpj() {
    return this.#cnpj;
  }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  getNomeMaiusculo() {
    return this.nome.toUpperCase();
  }
  getNomeMinusculo() {
    return this.nome.toLowerCase();
  }

  descricao() {
    let desc = `Empresa: ${this.nome} (CNPJ: ${this.getCnpj()})\n`;
    desc += `Endereço: ${this.endereco.rua}, ${this.endereco.numero}, ${this.endereco.cidade}\n`;
    desc += `Telefones: ${this.telefones.map(t => t.numero).join(", ")}\n\n`;
    desc += `Clientes:\n`;

    this.clientes.forEach((c, i) => {
      desc += `${i + 1}. ${c.nome} (CPF: ${c.getCpf()})\n`;
      desc += `   Endereço: ${c.endereco.rua}, ${c.endereco.numero}, ${c.endereco.cidade}\n`;
      desc += `   Telefones: ${c.telefones.map(t => t.numero).join(", ")}\n\n`;
    });

    return desc;
  }
}
