// src/controllers/livroController.js
const livroService = require("../services/livroService");

async function listar(req, res) {
  const livros = await livroService.listarLivros(req.query);
  return res.status(200).json(livros);
}

async function buscarPorId(req, res) {
  const id = req.params.id;
  const livro = await livroService.buscarLivroPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  return res.status(200).json(livro);
}

async function criar(req, res) {
  const erro = livroService.validarLivro(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const novoLivro = await livroService.criarLivro(req.body);
  return res.status(201).json(novoLivro);
}

async function atualizar(req, res) {
  const erro = livroService.validarLivro(req.body, false);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = req.params.id;
  const livroAtualizado = await livroService.atualizarLivro(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  return res.status(200).json(livroAtualizado);
}

async function atualizarParcial(req, res) {
  const erro = livroService.validarLivro(req.body, false);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = req.params.id;
  const livroAtualizado = await livroService.atualizarParcialLivro(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  return res.status(200).json(livroAtualizado);
}

async function deletar(req, res) {
  const id = req.params.id;
  const apagado = await livroService.deletarLivro(id);

  if (!apagado) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  return res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};