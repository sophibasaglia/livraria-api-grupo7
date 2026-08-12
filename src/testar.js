const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");
const Administrador = require("./Administrador");

const c1 = new Cliente("Maria Silva", "maria@email.com", 150);
const f1 = new Funcionario("Joao Souza", "joao@livraria.com", 2500);
const a1 = new Administrador("Ana Costa", "ana@livraria.com", 5000);

const Pessoa = [c1, f1, a1];

Pessoa.forEach((Pessoa) =>{
    Pessoa.apresentar();
    console.log("---");
});

console.log("Desconto do cliente: " + c1.calcularDesconto + "%");
a1.resetarSenha();

c1.apresentar();
console.log("");
f1.apresentar();
