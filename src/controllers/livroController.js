// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const livro = livroService.buscarLivroPorIndice(indice);
  const livro = categoriaServices.buscarLivroPorIndice(indice);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  return res.json(livro);
}

function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

function criar(req, res) {
const novoLivro = livroService.criarLivro(req.body);
res.status(201).json(novoLivro);
}

module.exports = {};
