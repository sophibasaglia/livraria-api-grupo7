const express = require("express");

const routes = require("./routes");

const logger = require("./middlewares/logger");

const rotaNaoEncontrada = require("./middlewares/rotaNaoEncontrada");

const tratarErros = require("./middlewares/tratarErros");

  
const app = express();

const PORTA = 4200;

app.use(logger);
app.use(express.json());
app.use(routes);

//app.use("/livros", livroRoutes);

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.use(rotaNaoEncontrada);
app.use(tratarErros);

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});