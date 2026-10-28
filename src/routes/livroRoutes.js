// ROTA: recebe a requisição HTTP referente a Livros.
const express = require("express");
const validarId = require("../middlewares/validarId");
const livroController = require("../controllers/livroController");

const router = express.Router();

router.get("/", livroController.listar);
router.get("/:id", validarId, livroController.buscarPorId);
router.post("/", livroController.criar);
router.put("/:id", validarId, livroController.atualizar);
router.patch("/:id", validarId, livroController.atualizarParcial);
router.delete("/:id", validarId, livroController.deletar);

module.exports = router;