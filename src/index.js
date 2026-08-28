const express = require("express");

const app = express();
const PORTA = 4200;

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});

app.get("/sobre", (req, res) => {
res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});