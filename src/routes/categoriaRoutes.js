// ROTA: recebe a requisicao HTTP.
const express = require("express");
const categoriaControllers = require("../controllers/categoriaControllers");

const router = express.Router();

router.get("/", categoriaControllers.listar);

module.exports = router;