
const categoriaService = require("../services/categoriaService");

async function listar(req, res) {
  const categorias = await categoriaService.listarCategorias(req.query);
  return res.status(200).json(categorias);
}

async function buscarPorId(req, res) {
  const id = req.params.id;
  const categoria = await categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  return res.status(200).json(categoria);
}

async function criar(req, res) {
  const erro = await categoriaService.validarCategoria(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const novaCategoria =  await categoriaService.criarCategoria(req.body);
  return res.status(201).json(novaCategoria);
}

async function atualizar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = req.params.id;
  const categoriaAtualizada =  await categoriaService.atualizarCategoria(id, req.body);

  if (!categoriaAtualizada) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  return res.status(200).json(categoriaAtualizada);
}

async function atualizarParcial(req, res) {

  const erro = categoriaService.validarCategoria(req.body, false);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const id = req.params.id;
  const categoriaAtualizada = await categoriaService.atualizarParcialCategoria(id, req.body);

  if (!categoriaAtualizada) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  return res.status(200).json(categoriaAtualizada);
}

async function deletar(req, res) {
  const id = req.params.id;
  const apagado = await categoriaService.deletarCategoria(id);

  if (!apagado) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
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