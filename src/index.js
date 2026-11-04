// src/index.js
require("dotenv").config();

const { testarConexao } = require("./config/db");
const express = require("express");
const routes = require("./routes");
const logger = require("./middlewares/logger");
const rotaNaoEncontrada = require("./middlewares/rotaNaoEncontrada");
const tratarErros = require("./middlewares/tratarErros");

const app = express();
const PORTA = 4200;


app.use(express.json());

app.use(logger);
app.use(routes);


app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

// 4. Middlewares de erro (Obrigatório vir por último, logo antes do app.listen)
app.use(rotaNaoEncontrada);
app.use(tratarErros);

// 5. Inicialização do servidor
app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
   testarConexao();
});