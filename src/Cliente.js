const Administrador = require("./Administrador");
const Pessoa = require("./Pessoa");

class Cliente extends Pessoa {
  #pontosFidelidade;

  constructor(nome, email, pontosFidelidade) {
    super(nome, email);

    this.#pontosFidelidade = pontosFidelidade;
  }

  get pontosFidelidade() {
    return this.#pontosFidelidade;
  }

  calcularDesconto() {
    if(this.#pontosFidelidade > 100) {
        return 10;
    }
    else {
        return 0;
    }
  }

  apresentar() {
    super.apresentar();
    console.log("Tipo: Cliente");
    console.log("Pontos: " + this.#pontosFidelidade);
  }
}

module.exports = Cliente;