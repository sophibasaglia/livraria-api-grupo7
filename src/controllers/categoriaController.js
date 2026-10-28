const categoriaService = require("../services/categoriaServices");

function listar(req, res) {
  const filtros = req.query;
  const categorias = categoriaService.listarCategorias(filtros);
  return res.status(200).json(categorias);
}

function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const categoria = categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(categoria);
}

function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const novaCategoria = categoriaService.criarCategoria(req.body);
  return res.status(201).json(novaCategoria);
}

function atualizar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = parseInt(req.params.id);
  const categoria = categoriaService.atualizarCategoria(id, req.body);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(categoria);
}

function atualizarParcial(req, res) {
  const erro = categoriaService.validarCategoria(req.body, false);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = parseInt(req.params.id);
  const categoria = categoriaService.atualizarParcialCategoria(id, req.body);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(categoria);
}

function deletar(req, res) {
  const id = parseInt(req.params.id);
  const sucesso = categoriaService.deletarCategoria(id);

  if (!sucesso) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
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