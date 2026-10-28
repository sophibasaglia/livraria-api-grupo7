class Pessoas {
  #email;
  #nome;

  constructor(nome, email) {
    this.nome = nome;
    this.#email = email;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    if (!novoNome || novoNome.trim() === "") {
      console.log("ERRO: Nome nao pode ser vazio.");
      return;
    }
    this.#nome = novoNome;
  }

  get email() {
    return this.#email;
  }

  set email(novoEmail) {
    if (!novoEmail || novoEmail.trim() === "") {
      console.log("ERRO: Email nao pode ser vazio.");
      return;
    }
    this.#email = novoEmail;
  }

  descrever() {
    console.log(`Nome: ${this.#nome}`);
    console.log(`Email: ${this.#email}`);
  }
}

module.exports = Pessoas;
