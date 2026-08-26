const express = require("express");

const app = express();
const PORTA = 67;

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});
