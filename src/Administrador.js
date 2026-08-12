const Funcionario = require("./Funcionario");
class Administrador extends Funcionario {
  constructor(nome, email, salario, cargo) {
    super(nome, email, salario, cargo);
  }
  resetarSenha() {
    console.log("Senha resetada.");
  }
}

module.exports = Administrador;
