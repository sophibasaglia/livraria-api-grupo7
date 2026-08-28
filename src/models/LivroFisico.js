const Livro = require("./Livro");

class LivroFisico extends Livro {
  #peso;

  constructor(titulo, autor, preco, estoque, peso) {
    super(titulo, autor, preco, estoque);
    this.#peso = peso;
  }

  get peso() {
    return this.#peso;
  }

  calcularFrete() {
    const PRECO_KG = 2.5;
    return this.#peso * PRECO_KG;
  }

  descrever() {
    super.descrever();
    console.log("Tipo:    Livro Físico");
    console.log("Peso:    " + this.#peso + " kg");
  }
}

module.exports = LivroFisico;
