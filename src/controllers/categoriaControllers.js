// CONTROLLER: decide o que fazer com cada pedido.
const categoriaService = require("../services/categoriaServices");

function listar(req, res) {
  const categorias = categoriaService.listarCategorias();
  res.json(categorias);
}

module.exports = { listar };