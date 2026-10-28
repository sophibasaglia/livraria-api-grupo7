const Funcionario = require("./Funcionario");

class Administrador extends Funcionario {
  constructor(nome, email, salario) {
    super(nome, email, salario);
  }

  resetarSenha() {
    console.log("Senha resetada.");
  }

  apresentar() {
    super.apresentar();
    console.log("Cargo: Administrador");
  }
}

module.exports = Administrador;