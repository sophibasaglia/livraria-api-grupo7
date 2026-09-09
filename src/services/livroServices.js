// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.
// Implementacao chega no Bloco 3.

const Livro = require("../models/Livro");

const Livros = [
    new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
    new Livro("Eloquent JavaScript", "Marjin haverbekr", 45, 20),
];

function listarLivros(){
    return Livros;
};

function buscarLivroPorIndice(indice){
    return Livros[indice];
}

module.exports = { listarLivros, buscarLivroPorIndice };