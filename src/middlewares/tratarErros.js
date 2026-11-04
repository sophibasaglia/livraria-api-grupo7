function tratarErros(err, req, res, next) {
  console.log("ERRO:", err.code, err.message);

  if (err.code === "ECONNREFUSED") {
    res.status(503).json({ erro: "Banco de dados indisponivel" });
    return;
}

if (err.code === "ER_DATA_TOO_LONG" || err.code === "ER_WARN_DATA_OUT_OF_RANGE") {
    res.status(400).json({ erro: "Algum valor e grande demais para o banco" });
    return;
}

res.status(500).json({ erro: "Erro interno no servidor" });
}

module.exports = tratarErros;