// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.

const livroService = require("../services/livroServices");

function listar(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

function buscarPorId(req, res) {
  livroService.buscarLivroPorId
  const id = parseInt (req.params.id);
  const livro = livroService.buscarLivroPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(200).json(livro);
}


function criar(req, res) {
  const erro = livroService.validarLivro(req.body, true);
  if (erro) {
  res.status(400).json({ erro: erro });
  return;
  }
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

function atualizar(req, res) {
  const erro = livroService.validarLivro(req.body, true);
  if (erro) {
  res.status(400).json({ erro: erro });
  return;
  }

  const indice = parseInt(req.params.id);
  const livro = livroService.atualizarLivro(req.params.id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  return res.status(200).json(livro);
}

function atualizarParcial(req, res) {
  const erro = livroService.validarLivro(req.body, true);
  if (erro) {
  res.status(400).json({ erro: erro });
  return;
  }

  const indice = parseInt(req.params.id);
  const livro = livroService.atualizarParcialLivro(req.params.id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  return res.status(200).json(livro);
}


function deletar(req, res) {
  const indice = parseInt(req.params.id);
  const sucesso = livroService.deletarLivro(req.params.id);
  
  if (!sucesso) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};
