// ROTA (o "garcom"): recebe a requisicao HTTP.
// Aqui vao ficar os caminhos (endpoints) relacionados a Livro.

const express = require("express");
const livroControllers = require("../controllers/livroControllers");

const router = express.Router();

router.get("/", livroControllers.listar);
router.get("/:indice", livroControllers.buscarPorIndice);
router.post("/", livroControllers.criar);
router.put("/:indice", livroControllers.atualizar);
router.patch("/:indice", livroControllers.atualizarParcial);
router.delete("/:indice", livroControllers.deletar);

module.exports = router;
