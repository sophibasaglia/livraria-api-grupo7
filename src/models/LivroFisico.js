const Livro = require("./Livro");
const PRECO_KG = 2.5;
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
    return this.#peso * PRECO_KG;
  }

  descrever() {
    super.descrever();
    console.log("Tipo:    Livro Físico");
    console.log("Peso:    " + this.#peso + " kg");
  }
}

module.exports = LivroFisico;
