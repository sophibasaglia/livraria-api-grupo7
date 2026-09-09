// ROTA (o "garcom"): recebe a requisicao HTTP.
// Aqui vao ficar os caminhos (endpoints) relacionados a Livro.
// Ex: GET /livros, POST /livros
// Implementacao chega no Bloco 3, quando o banco de dados entrar.

const express = require("express");
const livroControllers = require("../controllers/livroControllers")

const router = express.Router();

router.get("/", livroControllers.listar);
router.get("/:indice",livroControllers.buscarPorIndice);

module.exports = router;