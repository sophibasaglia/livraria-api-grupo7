// ROTA: recebe a requisição HTTP referente a Categorias.
const express = require("express");
const validarId = require("../middlewares/validarId"); // Se tiver criado na Atividade 16
const categoriaController = require("../controllers/categoriaController");

const router = express.Router();

router.get("/", categoriaController.listar);
router.get("/:id", validarId, categoriaController.buscarPorId);
router.post("/", categoriaController.criar);
router.put("/:id", validarId, categoriaController.atualizar);
router.patch("/:id", validarId, categoriaController.atualizarParcial);
router.delete("/:id", validarId, categoriaController.deletar);

module.exports = router;