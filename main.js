import { Empresa, Cliente, Telefone, Endereco } from "./models.js";

// new company
let endEmp = new Endereco("Rua Paraguai", "1000", "São Jose dos Campos");
let empresa = new Empresa("Tech Solutions", "12.345.678/0001-90", endEmp);

// company phones
empresa.adicionarTelefone(new Telefone("111111111", "fixo"));
empresa.adicionarTelefone(new Telefone("999999999", "celular"));

// new clients
for (let i = 1; i <= 5; i++) {
  let endCli = new Endereco("Rua " + i, "" + i, "Cidade " + i);
  let cliente = new Cliente("Cliente " + i, "000.000.000-0" + i, endCli);

  cliente.adicionarTelefone(new Telefone("222222222" + i, "fixo"));
  cliente.adicionarTelefone(new Telefone("888888888" + i, "celular"));

  empresa.adicionarCliente(cliente);
}

console.log(empresa.descricao());
