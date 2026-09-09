const Pessoa = require("./models/Pessoa");

const PORCENTAGEM_BONUS = 0.1;
class Funcionario extends Pessoa {
  #salario;

  constructor(nome, email, salario) {
    super(nome, email);
    this.#salario = salario;
  }

  get salario() {
    return this.#salario;
  }

  calcularBonus() {
    return this.#salario * PORCENTAGEM_BONUS;
  }

  apresentar() {
    super.apresentar();
    console.log("Tipo: Funcionario");
    console.log("Bonus: R$ " + this.calcularBonus().toFixed(2));
  }
}

module.exports = Funcionario;
