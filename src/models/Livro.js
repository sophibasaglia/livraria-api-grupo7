class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
    this.categoria = categoria;
  }
  descrever() {
    console.log("Titulo: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Preco: R$ " + this.#preco);
    console.log("Estoque: " + this.#estoque + " unidades");
    console.log("Categoria: " + this.categoria.nome);
  }
  valorEmEstoque() {
    return this.#preco * this.#estoque;
  }
  get preco() {
    return this.#preco;
  }
  get estoque() {
    return this.#estoque;
  }
  set preco(novoPreco) {
    if (novoPreco < 0) {
      throw new Error("Preco nao pode ser negativo");
    }
    this.#preco = novoPreco;
  }

  set estoque(novoEstoque) {
    if (novoEstoque < 0) {
      throw new Error("Estoque nao pode ser negativo");
    }
    this.#estoque = novoEstoque;
  }

  toJSON(){
    return {
      titulo: this.titulo,
      autor: this.autor,
      preco: this.#preco,
      estoque: this.#estoque
    };
  }
}

module.exports = Livro;
