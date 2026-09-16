const express = require("express");

const routes = require("./routes");

const logger = require("./middlewares/logger");

  
const app = express();
const PORTA = 4200;

app.use(logger);
app.use(routes);

//app.use("/livros", livroRoutes);

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

//app.get("/sobre", (req, res) => {
//res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
// });

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});