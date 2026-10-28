const Pessoas = require("./Pessoas");

const VALOR_PORCENTAGEM = 50;

class Cliente extends Pessoas {
  #pontosFidelidade;

  constructor(nome, email, pontosFidelidade) {
    super(nome, email);
    this.#pontosFidelidade = pontosFidelidade;
  }

  get pontosFidelidade() {
    return this.#pontosFidelidade;
  }

  set pontosFidelidade(novosPontos) {
    if (novosPontos < 0) {
      console.log("ERRO: Pontos de fidelidade nao podem ser menores que 0.");
      return;
    }
    this.#pontosFidelidade = novosPontos;
  }

  adicionarCompra(valorCompra) {
    if (valorCompra < 0) {
      console.log("ERRO: Valor da compra nao pode ser menor que 0.");
      return;
    }
    const pontosGanhos = valorCompra / VALOR_PORCENTAGEM;
    this.#pontosFidelidade += pontosGanhos;
    console.log(
      `Compra R$ ${valorCompra.toFixed(2)} registrada (+${pontosGanhos} pontos ganhos).`,
    );
  }

  descrever() {
    super.descrever();
    console.log(`Pontos de fidelidade: ${this.#pontosFidelidade}`);
  }
}

module.exports = Cliente;
