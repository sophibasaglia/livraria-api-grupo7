// Importa corretamente o arquivo de serviço
const categoriaService = require("../services/categoriaServices");

function listar(req, res) {
  const filtros = req.query;
  const livros = categoriaService.listarCategorias(filtros);
  res.status(200).json(livros);
}

function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const livro = categoriaService.buscarCategoriaPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(livro);
}

function criar(req, res) {
  // A validação foi movida para cá, onde "req" e "res" existem de verdade!
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const novoLivro = categoriaService.criarCategoria(req.body);
  res.status(201).json(novoLivro);
}

function atualizar(req, res) {
  const livro = categoriaService.atualizarCategoria(req.params.id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(livro);
}

function atualizarParcial(req, res) {
  const livro = categoriaService.atualizarParcialCategoria(req.params.id, req.body);
  
  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  return res.status(200).json(livro);
}

function deletar(req, res) {
  const sucesso = categoriaService.deletarCategoria(req.params.id);
  
  if (!sucesso) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.status(204).send();
}

// Exporta as funções do Controller para serem usadas no arquivo de rotas
module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};
