// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.

const categoriaService = require("../services/categoriaServices");

function listar(req, res) {
  const filtros = req.query;
  const livros = categoriaService.listarCategorias(filtros);
  res.status(200).json(livros);
}

function buscarPorId(req, res) {
  categoriaService.buscarCategoriaPorId
  const id = parseInt (req.params.id);
  const livro = categoriaService.buscarCategoriaPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(livro);
}

function criar(req, res) {
  const novoLivro = categoriaService.criarCategoria(req.body);
  res.status(201).json(novoLivro);
}

function atualizar(req, res) {
  const indice = parseInt(req.params.id);
  const livro = categoriaService.atualizarCategoria(req.params.id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(livro);
}

function atualizarParcial(req, res) {
  const indice = parseInt(req.params.id);
  const livro = categoriaService.atualizarParcialCategoria(req.params.id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(livro);
}


function deletar(req, res) {
  const indice = parseInt(req.params.id);
  const sucesso = categoriaService.deletarCategoria(req.params.id);
  
  if (!sucesso) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
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
