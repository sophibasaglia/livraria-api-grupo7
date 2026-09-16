// SERVICE: executa a logica de verdade.
const Categoria = require("../models/Categoria");

const categorias = [
  new Categoria("Ficção Científica", "Livros de ficção científica e futurismo"),
  new Categoria("Romance", "Livros de romance e relacionamentos"),
  new Categoria("Tecnologia", "Livros sobre programação e TI"),
];

function listarCategorias() {
  return categorias;
}

module.exports = { listarCategorias };