// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.

const Livro = require("../models/Livro")

const livros = [];
let proximoId = 1;

criarLivro({ titulo: "Clean Code", autor: "Robert C. Martin", preco: 89.9, estoque: 12,});

criarLivro({ titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", preco: 45.0, estoque: 20,});

criarLivro({ titulo: "O verão que mudou minha vida", autor: "Jenny Han", preco: 90.0, estoque: 10,});

criarLivro({ titulo: "O pequeno Príncipe", autor: "Antoine de Saint Exupery", preco: 50.0, estoque: 5,});

function listarTodos() {
  return livros;
}

function buscarLivroPorId(id) {
return livros.find((livro) => livro.id === Number(id));
}

function listarLivros(filtros = {}) { // Garante que filtros seja um objeto, mesmo se não enviarem nada
  let resultado = livros;

  if (filtros && filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor && livro.autor.toLowerCase().includes(String(filtros.autor).toLowerCase()),
    );
  }

  if (filtros && filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }

  if (filtros && filtros.precoMin) {
    resultado = resultado.filter(
      (livro) => livro.preco >= Number(filtros.precoMin),
    );
  }

  if (filtros && filtros.estoqueMin) {
    resultado = resultado.filter(
      (livro) => livro.estoque >= Number(filtros.estoqueMin), 
      // Nota: Mudei "livro.quantidade" para "livro.estoque" para bater com o seu modelo acima
    );
  }

  if (filtros && filtros.titulo) {
    resultado = resultado.filter((livro) =>
      livro.titulo && livro.titulo.toLowerCase().includes(String(filtros.titulo).toLowerCase()),
    );
  }

  return resultado;
}

function criarLivro(dados) {
const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque);
novoLivro.id = proximoId;
proximoId++;
livros.push(novoLivro);
return novoLivro;
}

function atualizarLivro(id, dados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;
  livro.titulo = dados.titulo;
  livro.autor = dados.autor;
  livro.preco = dados.preco;
  livro.estoque = dados.estoque;
  return livro;
}


function atualizarParcialLivro(id, dados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;
  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;
  return livro;
}

function deletarLivro(id) {
const posicao = livros.findIndex((livro) => livro.id === Number(id));
if (posicao === -1) return false;
livros.splice(posicao, 1);
return true;
}


module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
