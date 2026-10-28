// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.

const livroService = require("../services/livroService");

function listar(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);
  return res.status(200).json(livros);
}

function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const livro = livroService.buscarLivroPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(200).json(livro);
}

function criar(req, res) {
  const erro = livroService.validarLivro(req.body, true);
  
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const novoLivro = livroService.criarLivro(req.body);
  return res.status(201).json(novoLivro);
}

function atualizar(req, res) {
  const erro = livroService.validarLivro(req.body, true);

  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = parseInt(req.params.id);
  const livro = livroService.atualizarLivro(id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(200).json(livro);
}

function atualizarParcial(req, res) {
  const erro = livroService.validarLivro(req.body, false); // Geralmente validação parcial usa false para não exigir todos os campos

  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = parseInt(req.params.id);
  const livro = livroService.atualizarParcialLivro(id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(200).json(livro);
}

function deletar(req, res) {
  const id = parseInt(req.params.id);
  const sucesso = livroService.deletarLivro(id);
  
  if (!sucesso) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar
};