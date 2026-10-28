const Pessoas = require("./Pessoas");

const BONUS_SALARIO = 0.1;

class Funcionario extends Pessoas {
  #salario;
  #cargo;

  constructor(nome, email, salario, cargo) {
    super(nome, email);
    this.salario = salario;
    this.cargo = cargo;
  }

  get salario() {
    return this.#salario;
  }

  set salario(novoSalario) {
    if (novoSalario < 0) {
      console.log("ERRO: O salario nao pode ser menor que 0.");
      return;
    }
    this.#salario = novoSalario;
  }

  get cargo() {
    return this.#cargo;
  }

  set cargo(novoCargo) {
    if (!novoCargo || novoCargo.trim() === "") {
      console.log("ERRO: Cargo nao pode ser vazio.");
      return;
    }
    this.#cargo = novoCargo;
  }

  calcularBonus() {
    return this.#salario * VALOR_PORCENTAGEM;
  }

  descrever() {
    super.descrever();
    console.log(`Cargo: ${this.cargo}`);
    console.log(`Salario: R$ ${this.#salario.toFixed(2)}`);
    console.log(`Bonus: R$ ${this.calcularBonus().toFixed(2)}`);
  }
}

module.exports = Funcionario;
